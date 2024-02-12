import React from "react";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

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
