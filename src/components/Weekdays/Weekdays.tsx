import React, { FC } from "react";
import { WEEKDAY_NAMES_AMERICAN, WEEKDAY_NAMES_STANDART } from "@constants/weekdayNames";
import withTheme from "@decorators/withTheme";

import { IWeekdaysProps } from "./interfaces";
import { Container, Weekday } from "./styled";

const Weekdays: FC<IWeekdaysProps> = ({ isSundayFirst }) => {
  const selectedWeekdays = isSundayFirst ? WEEKDAY_NAMES_AMERICAN : WEEKDAY_NAMES_STANDART;

  return (
    <Container>
      {selectedWeekdays.map((dayName) => (
        <Weekday key={dayName}>{dayName}</Weekday>
      ))}
    </Container>
  );
};

export default withTheme(Weekdays);
