import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import DatePicker from "./DatePicker";

describe("DatePicker component", () => {
  it("Render date-picker", () => {
    render(<DatePicker data-testid="date-picker" />);

    const testingEl = screen.getByTestId("date-picker");
    expect(testingEl).toBeInTheDocument();
  });
});
