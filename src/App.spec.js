import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
describe("Run App tests", () => {
  it("should run App test", () => {
    render(<App />);
  });
});
