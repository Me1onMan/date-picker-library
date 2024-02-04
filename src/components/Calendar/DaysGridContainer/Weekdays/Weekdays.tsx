import React, { FC } from "react";
import theme from "@constants/theme";
import { WEEKDAY_NAMES_AMERICAN, WEEKDAY_NAMES_STANDART } from "@constants/weekdayNames";
import { ThemeProvider } from "styled-components";

import { IWeekdaysProps } from "./interfaces";
import { Container, Weekday } from "./styled";

const Weekdays: FC<IWeekdaysProps> = ({ isSundayFirst }) => {
  const selectedWeekdays = isSundayFirst ? WEEKDAY_NAMES_AMERICAN : WEEKDAY_NAMES_STANDART;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {selectedWeekdays.map((dayName) => (
          <Weekday key={dayName}>{dayName}</Weekday>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default Weekdays;
