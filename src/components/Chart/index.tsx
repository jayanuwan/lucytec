import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const Chart = ({ data }: any) => {
  return (
    <BarChart
      series={[{ data: [35, 44, 24, 34] }]}
      height={290}
      xAxis={[
        { data: ["10-30", "30-50", "50-70", "70-100"], scaleType: "band" },
      ]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
};

export default Chart;
