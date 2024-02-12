import React, { Component } from "react";
import withTheme from "@decorators/withTheme";

import { ErrorBoundaryProps, ErrorBoundaryState } from "./interfaces";
import { Error, ErrorBoundaryWrapper } from "./styled";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorBoundaryWrapper data-testid="error-boundary">
          <h2>Oops! Something went wrong :(</h2>
          <Error>{error && error.toString()}</Error>
        </ErrorBoundaryWrapper>
      );
    }

    return children;
  }
}

export default withTheme(ErrorBoundary);
