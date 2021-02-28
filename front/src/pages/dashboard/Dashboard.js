import React from "react";
import { Row, Col, Progress } from "reactstrap";

import Widget from "../../components/Widget";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'

import Map from "../../components/am4chartMap/am4chartMap";
import MultiCharts from "../../components/am4chartCharts/am4chartMultiCharts"
import DonutChart from "../../components/am4chartCharts/am4chartDonut"
import AnimateNumber from "react-animated-number";

import axios from 'axios';

import s from "./Dashboard.module.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localisation: this.props.localisation,
      //map
      casFranceByDate: null,
      listCasDepByDate: null,
      // stat dep
      CasDepByDate: null,
      HospitalByDepAndDate : null,
      //graphe muliple
      listCasFrance: null,
      listHospiFrance : null,
      //donut
      listCasFranceByAge : null,
    };
  }

  async componentDidMount() {
    //visu map stat donut /visual/:year/:month/:day/:dep/:age
    let pathURIVisual = `http://localhost:2023/visual/2021/02/23/${this.state.localisation}/0`;
    let res = await axios.get(pathURIVisual)
    let data = res.data
    this.setState({casFranceByDate : data.casFranceByDate})
    this.setState({listCasDepByDate : data.listCasDepByDate})
    this.setState({CasDepByDate : data.CasDepByDate})
    this.setState({HospitalByDepAndDate : data.HospitalByDepAndDate})
    this.setState({listCasFranceByAge : data.listCasFranceByAge})


    //graphe muliple
    /*let pathURIGraphListCasFrance = `http://localhost:2023/incidence/france/day/0`;
    let pathURIGraphListHospiFrance = `http://localhost:2023/hospitalDay/france`;
    this.state({listCasFrance : await axios.get(pathURIGraphListCasFrance).data});
    this.state({listHospiFrance : await axios.get(pathURIGraphListHospiFrance).data});*/
  }


  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          Dashboard &nbsp;
          <small>
            <small>France</small>
          </small>
        </h1>

        <Row>
          <Col lg={9}>
            <Widget className="bg-transparent">
              <Map mode={this.props.mode} casFranceByDate={this.state.casFranceByDate} listCasDepByDate={this.state.listCasDepByDate}/>
            </Widget>
          </Col>
          <Col lg={3}>
            <Widget
              className="bg-transparent"
              title={<h5 className="fw-semi-bold">Your statistics</h5>}
            >
              <p>
                Location : <strong>{this.state.localisation}</strong>
              </p>
              <p>
                <span className="circle bg-default text-white"><FontAwesomeIcon icon={faVirus} /></span> 
                {this.state.CasDepByDate.P} case 
              </p>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Number of hospitalized cases</h6>
                  <Progress
                    color="info"
                    value={(this.state.HospitalByDepAndDate.hosp/this.state.CasDepByDate.P *100).toString()}
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={this.state.HospitalByDepAndDate.hosp} />
                    </small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Number of cases in resuscitation</h6>
                  <Progress
                    color="warning"
                    value={(this.state.HospitalByDepAndDate.rea/this.state.CasDepByDate.P *100).toString()}
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={this.state.HospitalByDepAndDate.rea} />
                    </small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Number of deaths</h6>
                  <Progress
                    color="danger"
                    value={(this.state.HospitalByDepAndDate.dc/this.state.CasDepByDate.P *100).toString()}
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={this.state.HospitalByDepAndDate.dc} />
                    </small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Number of returns home</h6>
                  <Progress
                    color="success"
                    value={(this.state.HospitalByDepAndDate.rad/this.state.CasDepByDate.P *100).toString()}
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={this.state.HospitalByDepAndDate.rad} />
                    </small>
                  </span>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={9} xl={9} xs={12}>
          <Widget
              title={
                <h6>
                  <span className="badge badge-success mr-2">Main Stats</span>
                </h6>
              }
            >
              <MultiCharts />
            </Widget>
          </Col>
          <Col lg={3} xl={3} xs={12}>
          <Widget
              title={
                <h6>
                  <span className="badge badge-success mr-2">Case by age range</span>
                </h6>
              }
            >
              <DonutChart listCasFranceByAge={this.state.listCasFranceByAge}/>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Dashboard;
