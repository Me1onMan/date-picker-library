import React from "react";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import Button from "./styled";

const ClearIntervalButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Clear Interval</Button>
    </ThemeProvider>
  );
};

export default ClearIntervalButton;
