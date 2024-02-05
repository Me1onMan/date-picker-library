/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, { ComponentType, FC } from "react";
import theme from "@constants/theme";
import GlobalStyle from "@constants/themes/globalStyles";
import { ThemeProvider } from "styled-components";

const withTheme =
  <P extends object>(Component: ComponentType<P>): FC<P> =>
  (props: P) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...props} />
      </ThemeProvider>
    );
  };

export default withTheme;
