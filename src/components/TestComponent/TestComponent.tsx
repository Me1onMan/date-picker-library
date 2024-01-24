import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import { TestComponentWrapper } from "./styled";

const TestComponent: React.FC<TestComponentProps> = () => (
  <TestComponentWrapper data-testid="test-component">
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </TestComponentWrapper>
);

export default TestComponent;
