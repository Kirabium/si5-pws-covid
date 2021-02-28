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
  constructor(props) {
    super(props);
    this.state = {
      listCasDep: this.props.listCasDep,
      listHospiDep: this.props.listHospiDep,
    };
  }

  componentDidMount() {
    let chart = am4core.create("chartMulti", am4charts.XYChart);

    // Add data
    chart.data = [{
    "date": "2021-02-17",
    "hosp": 710,
    "rea": 108,
    "rad": 3855,
    "dc": 966
    },{
      "date": "2021-02-18",
      "hosp": 	713,
      "rea": 	115,
      "rad": 3897,
      "dc": 980
      },
      {
        "date": "2021-02-19",
        "hosp": 134,
        "rea": 11,
        "rad": 1502,
        "dc": 412
        },
        {
          "date": "2021-02-20",
          "hosp": 	363,
          "rea": 29,
          "rad": 1943,
          "dc": 405
          },
          {
            "date": "2021-02-21",
            "hosp": 740,
            "rea": 104,
            "rad": 3955,
            "dc": 994
            },
            {
              "date": "2021-02-22",
              "hosp": 	762,
              "rea": 110,
              "rad": 3976,
              "dc": 1002
              },
              {
                "date": "2021-02-23",
                "hosp": 	749,
                "rea": 109,
                "rad": 4034,
                "dc": 1021
                },
                {
                  "date": "2021-02-24",
                  "hosp": 	743,
                  "rea": 118,
                  "rad": 4072,
                  "dc": 1027
                  },
                  {
                    "date": "2021-02-25",
                    "hosp": 	721,
                    "rea": 114,
                    "rad": 4135,
                    "dc": 1040
                    },
                    {
                      "date": "2021-02-26",
                      "hosp": 716,
                      "rea": 113,
                      "rad": 4171,
                      "dc": 1047
                      },
                      {
                        "date": "2021-02-27",
                        "hosp": 706,
                        "rea": 117,
                        "rad": 	4196,
                        "dc": 1051
                        },
                        {
                          "date": "	2021-02-28",
                          "hosp": 708,
                          "rea": 120,
                          "rad": 4218,
                          "dc": 1057
                          },];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "date";
    categoryAxis.title.text = "Dates";
    categoryAxis.title.fill = am4core.color("#fff");

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Nombre de personne";
    valueAxis.title.fill = am4core.color("#fff");


    // Create series
    let mort = chart.series.push(new am4charts.ColumnSeries());
    mort.dataFields.valueY = "dc";
    mort.dataFields.categoryX = "date";
    mort.name = "Morts";
    mort.tooltipText = "{name}: [bold]{valueY}[/]"
    mort.fill = am4core.color("red");

    let home = chart.series.push(new am4charts.ColumnSeries());
    home.dataFields.valueY = "rad";
    home.dataFields.categoryX = "date";
    home.name = "Rémission";
    home.tooltipText = "{name}: [bold]{valueY}[/]";
    home.fill = am4core.color("green");

    let rea = chart.series.push(new am4charts.LineSeries());
    rea.dataFields.valueY = "rea";
    rea.dataFields.categoryX = "date";
    rea.name = "Réanimation";
    rea.tooltipText = "{name}: [bold]{valueY}[/]";
    rea.fill = am4core.color("yellow");
    rea.strokeWidth = 3;

    let hosp = chart.series.push(new am4charts.LineSeries());
    hosp.dataFields.valueY = "hosp";
    hosp.dataFields.categoryX = "date";
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