import React from "react"
import ReactApexChart from "react-apexcharts"
import getChartColorsArray from "../../components/Common/ChartsDynamicColor";

const barchart = ({dataColors}) => {
  const spineareaChartColors = getChartColorsArray(dataColors);

  const series = [
    {
      data: [380, 430, 450, 475, 550],
    },
  ]
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    colors: spineareaChartColors,
    grid: {
      borderColor: "#f1f1f1",
    },
    xaxis: {
      categories: [
        "Malware",
        "Phishing",
        "Incitement",
        "Defamation",
        "Hate Speech",
      ],
    },
  }

  return (
    <ReactApexChart options={options} series={series} type="bar" height="350" />
  )
}

export default barchart;