import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// smoke
it("renders without crashing", function() {
  render(<App />);
});

// snapshot
it("matches snapshot", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});