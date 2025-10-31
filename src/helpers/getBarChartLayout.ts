import { barChartLayout } from "../components/charts/BarChart/constants/barChartConstants";

export const getBarChartLayout = (title: string): Partial<Plotly.Layout> => {
  return {
    ...barChartLayout,
    title: {
      ...barChartLayout.title,
      text: title,
    },
  };
};
