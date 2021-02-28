import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import s from '../am4chartMap/am4chartMap.module.scss';

am4core.useTheme(am4themes_animated);

class am4chartDonut extends Component {


  componentDidMount() {
    let chart = am4core.create("chartDonut", am4charts.PieChart);

    // Add data
    chart.data = [{
    "age": "1-9",
    "litres": 501.9
    }, {
    "age": "10-19",
    "litres": 301.9
    }, {
    "age": "20-29",
    "litres": 201.1
    }, {
    "age": "30-39",
    "litres": 165.8
    }, {
    "age": "40-49",
    "litres": 139.9
    }, {
    "age": "50-59",
    "litres": 128.3
    }, {
    "age": "60-69",
    "litres": 99
    }, {
    "age": "70-79",
    "litres": 60
    }, {
    "age": "80-89",
    "litres": 50
    }, {
    "age": "90+",
    "litres": 50
    }];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "age";

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(40);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#4a2abb");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;


    // Add a legend
    chart.legend = new am4charts.Legend();
        this.chart = chart;
    }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartDonut" className={s.chartdiv}></div>
    );
  }
}

export default am4chartDonut;