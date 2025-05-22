import { Graph } from "react-d3-graph";
import { graphData } from "../data/graphData";

const config = {
    nodeHighlightBehavior: true,
    node: {
      size: 400,
      highlightStrokeColor: "white",
      labelProperty: "id",
      fontColor: "#ffffff"
    },
    link: {
      highlightColor: "lightblue",
      strokeWidth: 2,
    },
    height: 600,
    width: 1000,
    backgroundColor: "#1e1e1e"
  };
  
  
  

export default function GraphVisualizer() {
  return <Graph id="graph-id" data={graphData} config={config} />;
}
