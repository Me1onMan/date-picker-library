import React, { FC, memo } from "react";
import DayButton from "@components/DayButton/DayButton";
import Weekdays from "@components/Weekdays/Weekdays";
import withTheme from "@decorators/withTheme";
import { useCalendar } from "@providers/CalendarProvider";
import {
  getDaysSelectedMonth,
  getMissingNextDays,
  getMissingPrevDays,
} from "@utils/getDaysForCalendar";

import { IGridProps } from "./interfaces";
import Grid from "./styled";

const DaysGridContainer: FC<IGridProps> = memo(
  ({ isSundayFirst = false, isWithWeekends, isWithHolidays }) => {
    const { selectedMonth, selectedYear } = useCalendar();

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
            <DayButton
              date={date}
              isWithWeekends={isWithWeekends}
              isWithHolidays={isWithHolidays}
              key={date.toString()}
            />
          ))}
          {nextMonthDays.map((date) => (
            <DayButton date={date} isDisabled key={date.toString()} />
          ))}
        </Grid>
      </>
    );
  },
);

DaysGridContainer.displayName = "DaysGridContainer";

export default withTheme(DaysGridContainer);
