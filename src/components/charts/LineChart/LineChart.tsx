import Plot from "react-plotly.js";

import {
  lineChartConfig,
  lineChartLayout,
  lineChartStyles,
} from "./constants/lineChartConstants";
import type { ScatterTraceInterface } from "../../../interfaces/ScatterTraceInterface";
import type { Data } from "plotly.js";

export const LineChart = ({
  chartData,
}: {
  chartData: ScatterTraceInterface[];
}) => {
  return (
    <div className="max-h-[80%] max-w-[100%] flex justify-center">
      <Plot
        data={chartData as Data[]}
        config={lineChartConfig}
        layout={lineChartLayout}
        style={lineChartStyles}
      />
    </div>
  );
};
