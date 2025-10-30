export interface ScatterTraceInterface {
  x: number[];
  y: number[];
  text: string[];
  type: string;
  mode: string;
  marker: { color: string };
  hoverinfo: string;
  hoverlabel: {
    bgcolor: string;
  };
}
