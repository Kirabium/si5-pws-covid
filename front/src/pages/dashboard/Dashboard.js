import React from "react";
import { Row, Col, Progress } from "reactstrap";

import Widget from "../../components/Widget";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'

import Map from "../../components/am4chartMap/am4chartMap";
import MultiCharts from "../../components/am4chartCharts/am4chartMultiCharts"
import DonutChart from "../../components/am4chartCharts/am4chartDonut"
import AnimateNumber from "react-animated-number";

import s from "./Dashboard.module.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localisation: this.props.localisation,
    };
    console.log(this.state.localisation)
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
              <Map mode={this.props.mode} />
            </Widget>
          </Col>
          <Col lg={3}>
            <Widget
              className="bg-transparent"
              title={<h5 className="fw-semi-bold">Vos statistiques</h5>}
            >
              <p>
                Département : <strong>{this.state.localisation}</strong>
              </p>
              <p>
                <span className="circle bg-default text-white"><FontAwesomeIcon icon={faVirus} /></span> 
                nombre de cas 
              </p>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Nombre de cas hospitalisé</h6>
                  <Progress
                    color="info"
                    value="60"
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={75} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Nombre de cas en réanimation</h6>
                  <Progress
                    color="warning"
                    value="39"
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={84} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Nombre de mort</h6>
                  <Progress
                    color="danger"
                    value="80"
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={92} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Nombre de rémission</h6>
                  <Progress
                    color="success"
                    value="80"
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={92} />%
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
                  <span className="badge badge-success mr-2">Statistiques générales</span>
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
                  <span className="badge badge-success mr-2">Nombre de cas par tranche d'age</span>
                </h6>
              }
            >
              <DonutChart />
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Dashboard;
