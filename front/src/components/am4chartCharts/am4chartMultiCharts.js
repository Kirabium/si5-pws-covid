import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import s from '../am4chartMap/am4chartMap.module.scss';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);



class am4chartMultiCharts extends Component {

  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [{
    "country": "Lithuania",
    "litres": 501.9,
    "units": 250
    }, {
    "country": "Czech Republic",
    "litres": 301.9,
    "units": 222
    }, {
    "country": "Ireland",
    "litres": 201.1,
    "units": 170
    }, {
    "country": "Germany",
    "litres": 165.8,
    "units": 122
    }, {
    "country": "Australia",
    "litres": 139.9,
    "units": 99
    }, {
    "country": "Austria",
    "litres": 128.3,
    "units": 85
    }, {
    "country": "UK",
    "litres": 99,
    "units": 93
    }, {
    "country": "Belgium",
    "litres": 60,
    "units": 50
    }, {
    "country": "The Netherlands",
    "litres": 50,
    "units": 42
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.title.text = "Countries";
    categoryAxis.title.fill = am4core.color("#fff");

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Litres sold (M)";
    valueAxis.title.fill = am4core.color("#fff");

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.name = "Sales";
    series.tooltipText = "{name}: [bold]{valueY}[/]";

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "units";
    series2.dataFields.categoryX = "country";
    series2.name = "Units";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    series2.strokeWidth = 3;

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
      <div id="chartdiv" className={s.chartdiv}></div>
    );
  }
}

export default am4chartMultiCharts;