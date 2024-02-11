/* eslint-disable react/display-name */
import React, { ComponentType, FC } from "react";
import theme from "@constants/theme";
import GlobalStyle from "@constants/themes/globalStyles";
import { ThemeProvider } from "styled-components";

const withTheme = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
  const ComponentWithTheme = (props: P) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithTheme.displayName = `withTheme(${displayName})`;

  return ComponentWithTheme;
};

export default withTheme;
