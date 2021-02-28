import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import s from '../am4chartMap/am4chartMap.module.scss';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

const formatDate = (d) =>{
  var date = d,
  month = '' + (date.getMonth() + 1),
  day = '' + date.getDate(),
  year = date.getFullYear();

if (month.length < 2) 
  month = '0' + month;
if (day.length < 2) 
  day = '0' + day;

return [year, month, day].join('-');
}

class am4chartMultiCharts extends Component {


  componentDidMount() {
    let chart = am4core.create("chartMulti", am4charts.XYChart);

    // Add data
    chart.data = [{
    "country": formatDate(new Date(2021,2,10)),
    "litres": 501.9,
    "units": 250
    }, {
    "country": formatDate(new Date(2021,2,11)),
    "litres": 301.9,
    "units": 222
    }, {
    "country": formatDate(new Date(2021,2,12)),
    "litres": 201.1,
    "units": 170
    }, {
    "country": formatDate(new Date(2021,2,13)),
    "litres": 165.8,
    "units": 122
    }, {
    "country": formatDate(new Date(2021,2,14)),
    "litres": 139.9,
    "units": 99
    }, {
    "country":formatDate(new Date(2021,2,15)),
    "litres": 128.3,
    "units": 85
    }, {
    "country": formatDate(new Date(2021,2,16)),
    "litres": 99,
    "units": 93
    }, {
    "country": formatDate(new Date(2021,2,17)),
    "litres": 60,
    "units": 50
    }, {
    "country": formatDate(new Date(2021,2,18)),
    "litres": 50,
    "units": 42
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Dates";
    categoryAxis.title.fill = am4core.color("#fff");

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Nombre de personne";
    valueAxis.title.fill = am4core.color("#fff");

    // Create series
    let mort = chart.series.push(new am4charts.ColumnSeries());
    mort.dataFields.valueY = "litres";
    mort.dataFields.categoryX = "country";
    mort.name = "Morts";
    mort.tooltipText = "{name}: [bold]{valueY}[/]"
    mort.fill = am4core.color("red");

    let home = chart.series.push(new am4charts.ColumnSeries());
    home.dataFields.valueY = "units";
    home.dataFields.categoryX = "country";
    home.name = "Rémission";
    home.tooltipText = "{name}: [bold]{valueY}[/]";
    home.fill = am4core.color("green");

    let rea = chart.series.push(new am4charts.LineSeries());
    rea.dataFields.valueY = "units";
    rea.dataFields.categoryX = "country";
    rea.name = "Réanimation";
    rea.tooltipText = "{name}: [bold]{valueY}[/]";
    rea.fill = am4core.color("yellow");
    rea.strokeWidth = 3;

    let hosp = chart.series.push(new am4charts.LineSeries());
    hosp.dataFields.valueY = "litres";
    hosp.dataFields.categoryX = "country";
    hosp.name = "Hospitalisé";
    hosp.tooltipText = "{name}: [bold]{valueY}[/]";
    hosp.strokeWidth = 3;

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.fill = am4core.color("#fff");

    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    // Add simple vertical scrollbar
    chart.scrollbarY = new am4core.Scrollbar();

    // Add horizotal scrollbar
    chart.scrollbarX = new am4charts.XYChartScrollbar();

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartMulti" className={s.chartdiv}></div>
    );
  }
}

export default am4chartMultiCharts;