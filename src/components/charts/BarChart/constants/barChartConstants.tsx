export const barChartConfig = { displayModeBar: false, responsive: true };

export const barChartLayout: Partial<Plotly.Layout> = {
  showlegend: false,
  dragmode: false,
  hovermode: "closest",
  margin: { t: 0, l: 0, b: 0, r: 0 },
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

export const barChartStyle = {
  height: "100%",
  width: "100%",
};
