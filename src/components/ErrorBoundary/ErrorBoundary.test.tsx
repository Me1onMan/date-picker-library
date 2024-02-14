import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary component", () => {
  it("renders children without error", () => {
    const ChildComponent = () => <div data-testid="child-element">Child Element</div>;

    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );

    const childElement = screen.getByTestId("child-element");
    expect(childElement).toBeInTheDocument();
  });
});
