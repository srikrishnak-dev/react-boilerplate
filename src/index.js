import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, createRoot, 1000);
}

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
