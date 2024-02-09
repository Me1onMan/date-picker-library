import React from "react";
import withTheme from "@decorators/withTheme";
import { useCalendar } from "@providers/CalendarProvider";
import { useRange } from "@providers/RangeProvider";
import { useSelectedDay } from "@providers/SelectedDayProvider";
import { checkWeekend, isDaysEqual } from "@utils/calculateDates";

import { IDayProps } from "./interfaces";
import Button from "./styled";

const DayButton = ({ date, isDisabled = false, isWithWeekends }: IDayProps) => {
  const { today } = useCalendar();
  const { selectedDay, setSelectedDay } = useSelectedDay();
  const { setRangeOnClick } = useRange();

  const isSelected = isDaysEqual(date, selectedDay);

  const handleClick = setRangeOnClick
    ? () => setRangeOnClick(date)
    : () => {
        if (isSelected) setSelectedDay(undefined);
        else setSelectedDay(date);
      };

  return (
    <Button
      $isWeekend={isWithWeekends && checkWeekend(date)}
      $isToday={isDaysEqual(date, today)}
      $isSelected={isSelected}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {date.getDate()}
    </Button>
  );
};

export default withTheme(DayButton);
