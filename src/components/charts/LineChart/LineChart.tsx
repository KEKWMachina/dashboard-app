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
    <div className="h-[80%] w-[100%] flex justify-center overflow-clip">
      <Plot
        data={chartData as Data[]}
        config={lineChartConfig}
        layout={lineChartLayout}
        style={lineChartStyles}
      />
    </div>
  );
};
