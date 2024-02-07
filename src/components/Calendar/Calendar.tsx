import React, { FC } from "react";
import DaysGridContainer from "@components/DaysGridContainer/DaysGridContainer";
import MonthSlider from "@components/MonthSlider/MonthSlider";
import withTheme from "@decorators/withTheme";
import { useCalendar } from "@providers/CalendarProvider";

import { ICalendarProps } from "./interfaces";
import Container from "./styled";

const Calendar: FC<ICalendarProps> = () => {
  const { selectedYear, setSelectedYear, selectedMonth, setSelectedMonth } = useCalendar();
  const goPrevMonth = () => {
    setSelectedYear(selectedMonth === 0 ? selectedYear - 1 : selectedYear);
    setSelectedMonth(selectedMonth > 0 ? selectedMonth - 1 : 11);
  };

  const goNextMonth = () => {
    setSelectedYear(selectedMonth === 11 ? selectedYear + 1 : selectedYear);
    setSelectedMonth(selectedMonth < 11 ? selectedMonth + 1 : 0);
  };

  return (
    <Container>
      <MonthSlider
        year={selectedYear}
        month={selectedMonth}
        goPrevMonth={goPrevMonth}
        goNextMonth={goNextMonth}
      />
      <DaysGridContainer />
    </Container>
  );
};

export default withTheme(Calendar);
