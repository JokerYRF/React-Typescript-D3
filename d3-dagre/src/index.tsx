import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Dagre from "./D3-Dagre";

let data = {
  nodes: [
    {
      id: "YRF",
      label: "Max"
    },
    {
      id: "YDX",
      label: "Hapi"
    }
  ],
  links: [{ source: "YRF", target: "YDX", label: "hapi" }]
};
ReactDOM.render(
  <Dagre
    nodes={data.nodes}
    links={data.links}
    width={"100%"}
    height={"100%"}
    zoomable={true}
    style={{
      stroke: "black",
      fill: "pink"
    }}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
