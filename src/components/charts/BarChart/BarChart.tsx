import Plot from "react-plotly.js";
import { getBarChartData } from "../../../helpers/getBarChartData";
import type { Data, Layout } from "plotly.js";
import { barChartConfig, barChartLayout, barChartStyle } from "./constants/barChartConstants";

export const BarChart = ({
  average,
  max,
}: {
  average: number;
  max: number;
}) => {
  return (
    <div className="h-[80%] w-[100%] flex justify-center overflow-clip">
      <Plot
        data={getBarChartData(average, max) as Data[]}
        config={barChartConfig}
        layout={barChartLayout as Layout}
        style={barChartStyle}
      />
    </div>
  );
};
