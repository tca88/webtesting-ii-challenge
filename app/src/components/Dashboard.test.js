import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard.js";

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
  });
});
