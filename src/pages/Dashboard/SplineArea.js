import React from "react"
import ReactApexChart from "react-apexcharts"
import getChartColorsArray from "../../components/Common/ChartsDynamicColor"

const Spinearea = ({ dataColors }) => {
  const spineareaChartColors = getChartColorsArray(dataColors)

  const series = [
    {
      name: "",
      data: [74, 83, 102, 97, 86, 106, 93, 114, 94, 24, 54, 10],
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
        horizontal: false,
        columnWidth: "45%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    colors: spineareaChartColors,
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      show: false,
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val
        },
      },
    },
  }

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  )
}

export default Spinearea
