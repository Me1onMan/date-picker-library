import React from "react";
import withTheme from "@decorators/withTheme";
import { useCalendar } from "@providers/CalendarProvider";
import { useRange } from "@providers/RangeProvider";
import { useSelectedDay } from "@providers/SelectedDayProvider";
import { checkWeekend, isDaysEqual } from "@utils/calculateDates";
import { getRangeType } from "@utils/getRangeType";
import isHoliday from "@utils/isHoliday";

import { IDayProps } from "./interfaces";
import Button from "./styled";

const DayButton = ({ date, isDisabled = false, isWithWeekends, isWithHolidays }: IDayProps) => {
  const { today } = useCalendar();
  const { selectedDay, setSelectedDay } = useSelectedDay();
  const { setRangeOnClick, startDate, endDate } = useRange();

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
      $isHoliday={isWithHolidays && isHoliday(date)}
      $isToday={isDaysEqual(date, today)}
      $isSelected={isSelected}
      $rangeType={getRangeType(date, startDate, endDate)}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {date.getDate()}
    </Button>
  );
};

export default withTheme(DayButton);
