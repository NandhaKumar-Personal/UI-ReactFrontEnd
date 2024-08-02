import React from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = "rgb(0, 0, 0)";

const data = {
  labels: ["processed", "pending"],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ["rgb(0, 0, 0)", "rgb(204, 223, 243)"],
      borderWidth: 2,
      radius: "40%",
    },
  ],
};

function CreateDoughnutData() {
  return (
    <div className="w-full h-full">
      <Doughnut data={data} />
    </div>
  );
}

export default CreateDoughnutData;
