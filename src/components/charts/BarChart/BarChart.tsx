import Plot from "react-plotly.js";
import type { Data } from "plotly.js";

import { getBarChartData } from "../../../helpers/getBarChartData";
import { barChartConfig, barChartStyle } from "./constants/barChartConstants";
import { getBarChartLayout } from "../../../helpers/getBarChartLayout";

export const BarChart = ({
  average,
  max,
  title,
}: {
  average: number;
  max: number;
  title: string;
}) => {
  return (
    <div className="h-[80%] w-[100%] sm:w-[80%] md:w-[60%] flex justify-center overflow-clip">
      <Plot
        data={getBarChartData(average, max) as Data[]}
        layout={getBarChartLayout(title)}
        config={barChartConfig}
        style={barChartStyle}
      />
    </div>
  );
};
