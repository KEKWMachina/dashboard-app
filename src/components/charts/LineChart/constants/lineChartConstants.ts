import type { ScatterTrace } from "../../../../interfaces";

export const lineChartConfig = { displayModeBar: false, responsive: true };

export const lineChartStyles = {
  height: "80%",
  width: "80%",
};

export const lineChartLayout: Partial<Plotly.Layout> = {
  showlegend: false,
  dragmode: false,
  hovermode: "closest",
  margin: { t: 30, l: 30, b: 30, r: 30 },
  xaxis: {
    rangebreaks: [{ enabled: false }],
    zeroline: false,
    automargin: false,
    fixedrange: true,
    linewidth: 1,
  },
  yaxis: {
    zeroline: false,
    automargin: false,
    fixedrange: true,
    linewidth: 1,
  },
};

export const LineChartScatterTraceConfig: ScatterTrace = {
  x: [],
  y: [],
  text: [],
  type: "scatter",
  mode: "lines",
  marker: { color: "green" },
  hoverinfo: "text",
  hoverlabel: {
    bgcolor: "#fff",
  },
};
