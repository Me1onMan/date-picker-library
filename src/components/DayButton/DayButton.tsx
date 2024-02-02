import React from "react";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import { IDayProps } from "./interfaces";
import Button from "./styled";

const DayButton = ({ date, isWeekend = false }: IDayProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button isWeekend={isWeekend}>{date.getDate()}</Button>
    </ThemeProvider>
  );
};

export default DayButton;
