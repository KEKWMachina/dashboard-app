import type { BarChartTrace } from "../interfaces/BarTraceInterface";

export const getBarChartData = (
  average: number,
  max: number
): BarChartTrace[] => {
  return [
    {
      x: ["Max"],
      y: [max],
      type: "bar",
      hoverinfo: "skip",
      text: `<span>Max</span><br>${max}`,
      marker: {
        color: "green",
      },
    },
    {
      x: ["Average"],
      y: [average],
      type: "bar",
      hoverinfo: "skip",
      text: `<span>Average</span><br>${average}`,
      marker: {
        color: "blue",
      },
    },
  ];
};
