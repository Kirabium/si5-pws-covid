import React, { Component } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_franceDepartmentsHigh from "@amcharts/amcharts4-geodata/franceDepartmentsHigh";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'

import AnimateNumber from 'react-animated-number';
import s from './am4chartMap.module.scss';

  
class Am4chartMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localisation: this.props.localisation,

      casFranceByDate: this.props.casFranceByDate,
      listCasDepByDate: this.props.listCasDepByDate,
    };
  }

    colors = {
      light: {
        lightFill: "#C7D0FF",
        darkFill:"#0dc2ff",
        darkerFill:"#00aae3",
        stroke: "#1a0057",
        pin: "https://i.ibb.co/10ntngd/darkpin.png",
        text : "#000"
      },
      dark: {
        lightFill: "#C7D0FF",
        darkFill:"#474D84",
        darkerFill:"#354D84",
        stroke: "#6979C9",
        pin: "https://i.ibb.co/10ntngd/darkpin.png",
        text : "#fff"
      },
      plague: {
        lightFill: "#E15550",
        darkFill:"#BF3127",
        darkerFill:"#94372C",
        stroke: "#F1FDFA",
        pin: "https://i.ibb.co/J7MjDzR/plaguepin.png",
        text : "#fff"
      }
    }
  
  componentDidMount() {
    let map = am4core.create("map", am4maps.MapChart);
    map.geodata = am4geodata_franceDepartmentsHigh;
    map.projection = new am4maps.projections.Mercator();
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.calculateVisualCenter = true;

    //zoom controller
    map.homeZoomLevel = 1;
    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.layout = 'horizontal';
    map.zoomControl.align = 'left';
    map.zoomControl.valign = 'bottom';
    map.zoomControl.dy = -10;
    map.zoomControl.contentHeight = 20;
    map.zoomControl.minusButton.background.fill = am4core.color(this.colors[this.props.mode].lightFill);
    map.zoomControl.minusButton.background.stroke = am4core.color(this.colors[this.props.mode].stroke);
    map.zoomControl.minusButton.label.fontWeight = 600;
    map.zoomControl.minusButton.label.fontSize = 22;
    map.zoomControl.minusButton.scale = .75;
    map.zoomControl.minusButton.label.scale = .75;
    map.zoomControl.plusButton.background.fill = am4core.color(this.colors[this.props.mode].lightFill);
    map.zoomControl.plusButton.background.stroke = am4core.color(this.colors[this.props.mode].stroke);
    map.zoomControl.plusButton.label.fontWeight = 600;
    map.zoomControl.plusButton.label.fontSize = 22;
    map.zoomControl.plusButton.label.align = "center";
    map.zoomControl.plusButton.scale = .75;
    map.zoomControl.plusButton.label.scale = .75;
    map.zoomControl.plusButton.dx = 5;

    let plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover");
    plusButtonHoverState.properties.fill = am4core.color(this.colors[this.props.mode].darkFill);

    let minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover");
    minusButtonHoverState.properties.fill = am4core.color(this.colors[this.props.mode].darkFill);


    // Create map polygon template
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color(this.colors[this.props.mode].darkFill);
    polygonTemplate.stroke = am4core.color(this.colors[this.props.mode].stroke)

    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color(this.colors[this.props.mode].darkerFill);

    // Configure label series
    let labelSeries = map.series.push(new am4maps.MapImageSeries());
    let labelTemplate = labelSeries.mapImages.template.createChild(am4core.Label);
    labelTemplate.horizontalCenter = "middle";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fontSize = 5;
    labelTemplate.fontWeight = 500
    labelTemplate.fill = am4core.color(this.colors[this.props.mode].text);

    let newData =  this.state.listCasDepByDate? this.state.listCasDepByDate: ["0"];
    // Set up label series to populate
    polygonSeries.events.on("inited", function () {
        newData.map(incident =>{
          let polygon = polygonSeries.getPolygonById("FR-"+incident.dep);
          if(polygon){
            let label = labelSeries.mapImages.create();
            label.latitude = polygon.visualLatitude;
            label.longitude = polygon.visualLongitude;
            label.children.getIndex(0).text = incident.P;
          }
        })
    });  

    this.map = map;
  }

  componentWillUnmount() {
    if(this.map) {
      this.map.dispose();
    }
  }

  render() {
    return (
      <div className={s.mapChart}>
        <div className={s.stats}>
          <h6 className="mt-1">Cas confirmés</h6>
          <p className="h3 m-0">
            <span className="mr-xs fw-normal">
              <AnimateNumber
                value={this.state.casFranceByDate? this.state.casFranceByDate.P : 0}
                initialValue={0}
                duration={1000} 
                stepPrecision={0}
                formatValue={n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
              /></span>
            <FontAwesomeIcon icon={faVirus} />

          </p>
        </div>
        <div className={s.map} id="map">
          <span>Erreur map</span>
        </div>
      </div>
    );
  }
}

export default Am4chartMap;
