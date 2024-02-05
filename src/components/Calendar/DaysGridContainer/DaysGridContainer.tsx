import React from "react";
import withTheme from "@decorators/withTheme";
import { useCalendar } from "@providers/CalendarProvider";
import {
  getDaysSelectedMonth,
  getMissingNextDays,
  getMissingPrevDays,
} from "@utils/calculateDates";

import DayButton from "./DayButton/DayButton";
import Weekdays from "./Weekdays/Weekdays";
import Grid from "./styled";

const DaysGridContainer = () => {
  const { isSundayFirst, selectedMonth, selectedYear } = useCalendar();

  const prevMonthDays = [...getMissingPrevDays(selectedYear, selectedMonth, isSundayFirst)];
  const currentMonthDays = [...getDaysSelectedMonth(selectedYear, selectedMonth)];
  const nextMonthDays = [...getMissingNextDays(selectedYear, selectedMonth, isSundayFirst)];

  return (
    <>
      <Weekdays isSundayFirst={isSundayFirst} />
      <Grid>
        {prevMonthDays.map((date) => (
          <DayButton date={date} isDisabled key={date.toString()} />
        ))}
        {currentMonthDays.map((date) => (
          <DayButton date={date} key={date.toString()} />
        ))}
        {nextMonthDays.map((date) => (
          <DayButton date={date} isDisabled key={date.toString()} />
        ))}
      </Grid>
    </>
  );
};

export default withTheme(DaysGridContainer);
