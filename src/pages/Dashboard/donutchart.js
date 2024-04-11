import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../components/Common/ChartsDynamicColor";

const DonutChart = ({ dataColors }) => {
  const donutApexChartColors = getChartColorsArray(dataColors);

  const series = [44, 55];

  const options = {
    labels: ["Authorized", "Unauthorized"],
    colors: donutApexChartColors,
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: false,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  const annotations = [
    {
      points: [
        {
          x: "50%",
          y: "50%",
          text: "Center Text",
          textAlign: "center",
          background: "#fff",
          fontSize: "20px",
          borderColor: "#999",
          borderWidth: 1,
          borderRadius: 4,
          offsetX: 0,
          offsetY: 0,
        },
      ],
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      height="320"
      annotations={annotations}
    />
  );
};

export default DonutChart;
