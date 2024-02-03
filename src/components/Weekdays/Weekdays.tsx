import React from "react";
import theme from "@constants/theme";
import WEEKDAY_NAMES from "@constants/weekdayNames";
import { ThemeProvider } from "styled-components";

import { Container, Weekday } from "./styled";

const Weekdays = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {WEEKDAY_NAMES.map((dayName) => (
          <Weekday key={dayName}>{dayName}</Weekday>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default Weekdays;
