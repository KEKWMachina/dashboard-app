import Plot from "react-plotly.js";
import type { Data } from "plotly.js";

import {
  lineChartConfig,
  lineChartLayout,
  lineChartStyles,
} from "./constants/lineChartConstants";
import type { ScatterTrace } from "../../../interfaces/ScatterTrace.interface";

export const LineChart = ({
  chartData,
}: {
  chartData: ScatterTrace[];
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
