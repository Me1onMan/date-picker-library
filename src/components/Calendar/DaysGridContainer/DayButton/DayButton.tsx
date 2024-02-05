import React from "react";
import withTheme from "@decorators/withTheme";
import { useCalendar } from "@providers/CalendarProvider";
import { checkWeekend, isDaysEqual } from "@utils/calculateDates";

import { IDayProps } from "./interfaces";
import Button from "./styled";

const DayButton = ({ date, isDisabled = false, isSelected = false }: IDayProps) => {
  const { setSelectedDay, today } = useCalendar();

  const handleClick = () => {
    if (isSelected) setSelectedDay(undefined);
    else setSelectedDay(date);
  };

  return (
    <Button
      isWeekend={checkWeekend(date)}
      isToday={isDaysEqual(date, today)}
      isSelected={isSelected}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {date.getDate()}
    </Button>
  );
};

export default withTheme(DayButton);
