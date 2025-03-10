import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const Chart = ({ data }: any) => {
  const setA: Array<number> = [];
  const setB: Array<number> = [];
  const setC: Array<number> = [];
  const setD: Array<number> = [];

  data &&
    data.forEach((element: any) => {
      const age = element.age;
      if (age >= 10 && age <= 30) {
        setA.push(age);
      }
      if (age >= 31 && age <= 50) {
        setB.push(age);
      }
      if (age >= 51 && age <= 70) {
        setC.push(age);
      }
      if (age >= 71 && age <= 100) {
        setD.push(age);
      }
    });

  const chartSetting = {
    yAxis: [
      {
        label: "Count",
      },
    ],
  };

  return (
    <BarChart
      title="Age Details"
      series={[{ data: [setA.length, setB.length, setC.length, setD.length] }]}
      height={300}
      xAxis={[
        {
          data: ["10-30", "30-50", "50-70", "70-100"],
          scaleType: "band",
          label: "Age range",
        },
      ]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      {...chartSetting}
    />
  );
};

export default Chart;
