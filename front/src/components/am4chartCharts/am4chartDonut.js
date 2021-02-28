import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import s from '../am4chartMap/am4chartMap.module.scss';

am4core.useTheme(am4themes_animated);

class am4chartDonut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCasFranceByAge: this.props.listCasFranceByAge,
    };
  }

  componentDidMount() {
    let chart = am4core.create("chartDonut", am4charts.PieChart);

    let newData = []
    
    let listCases = this.props.listCasFranceByAge? this.props.listCasFranceByAge : [{'cl_age90':10,'P':10}]
    listCases.map(cas =>{
      if(cas.cl_age90 != 90){
        newData.push({"age": (cas.cl_age90-9)+"-"+cas.cl_age90+"ans","case": cas.P })
      }else {
        newData.push({"age": cas.cl_age90+"+","case": cas.P })
      }
    })

    // Add data
    console.log(this.props.listCasFranceByAge)
    chart.data = newData;

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "case";
    pieSeries.dataFields.category = "age";

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(30);

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