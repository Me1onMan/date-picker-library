import React from "react";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import { Container, Weekday } from "./styled";

const weekdayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const Weekdays = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {weekdayNames.map((dayName) => (
          <Weekday key={dayName}>{dayName}</Weekday>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default Weekdays;
