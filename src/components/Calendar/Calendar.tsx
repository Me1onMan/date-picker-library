import React, { FC, useCallback } from "react";
import DaysGridContainer from "@components/DaysGridContainer/DaysGridContainer";
import MonthSlider from "@components/MonthSlider/MonthSlider";
import withTheme from "@decorators/withTheme";
import { useCalendar } from "@providers/CalendarProvider";

import { ICalendarProps } from "./interfaces";
import Container from "./styled";

const Calendar: FC<ICalendarProps> = ({
  isSundayFirst = false,
  isWithWeekends = false,
  isWithHolidays = false,
}) => {
  const { selectedYear, setSelectedYear, selectedMonth, setSelectedMonth } = useCalendar();
  const goPrevMonth = useCallback(() => {
    setSelectedYear(selectedMonth === 0 ? selectedYear - 1 : selectedYear);
    setSelectedMonth(selectedMonth > 0 ? selectedMonth - 1 : 11);
  }, [setSelectedMonth, selectedMonth, setSelectedYear, selectedYear]);

  const goNextMonth = useCallback(() => {
    setSelectedYear(selectedMonth === 11 ? selectedYear + 1 : selectedYear);
    setSelectedMonth(selectedMonth < 11 ? selectedMonth + 1 : 0);
  }, [setSelectedMonth, selectedMonth, setSelectedYear, selectedYear]);

  return (
    <Container>
      <MonthSlider
        year={selectedYear}
        month={selectedMonth}
        goPrevMonth={goPrevMonth}
        goNextMonth={goNextMonth}
      />
      <DaysGridContainer
        isSundayFirst={isSundayFirst}
        isWithWeekends={isWithWeekends}
        isWithHolidays={isWithHolidays}
      />
    </Container>
  );
};

export default withTheme(Calendar);
