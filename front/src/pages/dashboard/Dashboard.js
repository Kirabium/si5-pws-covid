import React, { useEffect } from "react";
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
import { useState } from "react";

function Dashboard(props) {
  const [localisation, setLocalisation] = useState(props.localisation)
  //map
  const [casFranceByDate, setCasFranceByDate] = useState(null)
  const [listCasDepByDate, setListCasDepByDate] = useState(null)
  // stat dep
  const [casDepByDate, setCasDepByDate] = useState(null)
  const [hospitalByDepAndDate, setHospitalByDepAndDate] = useState(null)
  //graphe muliple
  const [listCasFrance, setListCasFrance] = useState(null)
  const [listHospiFrance, setListHospiFrance] = useState(null)
  //donut
  const [listCasFranceByAge, setListCasFranceByAge] = useState(null)


  
  //visu map stat donut /visual/:year/:month/:day/:dep/:age
  let pathURIVisual = `http://localhost:2023/visual/2021/02/23/${localisation}/0`;

  useEffect(()=>{
    axios.get(pathURIVisual).then(res => {
      let data = res.data
      setCasFranceByDate(data.casFranceByDate[0])
      setListCasDepByDate(data.listCasDepByDate[0])
      setCasDepByDate(data.CasDepByDate[0])
      setHospitalByDepAndDate(data.HospitalByDepAndDate[0])
      setListCasFranceByAge(data.listCasFranceByAge)
    })
  });

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
            <Map mode={props.mode} casFranceByDate={casFranceByDate} listCasDepByDate={listCasDepByDate} />
          </Widget>
        </Col>
        <Col lg={3}>
          <Widget
            className="bg-transparent"
            title={<h5 className="fw-semi-bold">Your statistics</h5>}
          >
            <p>
              Location : <strong>{localisation}</strong>
            </p>
            <p>
              <span className="circle bg-default text-white"><FontAwesomeIcon icon={faVirus} /></span>
              {casDepByDate ? casDepByDate.P : "x"} case
              </p>
            <div className="row progress-stats">
              <div className="col-md-9 col-12">
                <h6 className="name fw-semi-bold">Number of hospitalized cases</h6>
                <Progress
                  color="info"
                  value={casDepByDate && hospitalByDepAndDate ? (hospitalByDepAndDate.hosp / casDepByDate.P * 100).toString() : "0"}
                  className="bg-custom-dark progress-xs"
                />
              </div>
              <div className="col-md-3 col-12 text-center">
                <span className="status rounded rounded-lg bg-default text-light">
                  <small>
                    <AnimateNumber value={hospitalByDepAndDate ? hospitalByDepAndDate.hosp : 0} />
                  </small>
                </span>
              </div>
            </div>
            <div className="row progress-stats">
              <div className="col-md-9 col-12">
                <h6 className="name fw-semi-bold">Number of cases in resuscitation</h6>
                <Progress
                  color="warning"
                  value={casDepByDate && hospitalByDepAndDate ? (hospitalByDepAndDate.rea / casDepByDate.P * 100).toString() : "0"}
                  className="bg-custom-dark progress-xs"
                />
              </div>
              <div className="col-md-3 col-12 text-center">
                <span className="status rounded rounded-lg bg-default text-light">
                  <small>
                    <AnimateNumber value={hospitalByDepAndDate ? hospitalByDepAndDate.rea : 0} />
                  </small>
                </span>
              </div>
            </div>
            <div className="row progress-stats">
              <div className="col-md-9 col-12">
                <h6 className="name fw-semi-bold">Number of deaths</h6>
                <Progress
                  color="danger"
                  value={casDepByDate && hospitalByDepAndDate ? (hospitalByDepAndDate.dc / casDepByDate.P * 100).toString() : "0"}
                  className="bg-custom-dark progress-xs"
                />
              </div>
              <div className="col-md-3 col-12 text-center">
                <span className="status rounded rounded-lg bg-default text-light">
                  <small>
                    <AnimateNumber value={hospitalByDepAndDate ? hospitalByDepAndDate.dc : 0} />
                  </small>
                </span>
              </div>
            </div>
            <div className="row progress-stats">
              <div className="col-md-9 col-12">
                <h6 className="name fw-semi-bold">Number of returns home</h6>
                <Progress
                  color="success"
                  value={casDepByDate && hospitalByDepAndDate ? (hospitalByDepAndDate.rad / casDepByDate.P * 100).toString() : "0"}
                  className="bg-custom-dark progress-xs"
                />
              </div>
              <div className="col-md-3 col-12 text-center">
                <span className="status rounded rounded-lg bg-default text-light">
                  <small>
                    <AnimateNumber value={hospitalByDepAndDate ? hospitalByDepAndDate.rad : 0} />
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
            <DonutChart listCasFranceByAge={listCasFranceByAge} />
          </Widget>
        </Col>
      </Row>
    </div>
  );
}
export default Dashboard;
