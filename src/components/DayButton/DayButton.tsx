import React, { memo } from "react";
import withTheme from "@decorators/withTheme";
import { useCalendar } from "@providers/CalendarProvider";
import { useRange } from "@providers/RangeProvider";
import { useSelectedDay } from "@providers/SelectedDayProvider";
import { getRangeType } from "@utils/calculateRange";
import checkWeekend from "@utils/checkWeeend";
import { isDaysEqual } from "@utils/compareDates";
import isHoliday from "@utils/isHoliday";

import { IDayProps } from "./interfaces";
import Button from "./styled";

const DayButton = memo(
  ({ date, isDisabled = false, isWithWeekends, isWithHolidays }: IDayProps) => {
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
  },
);

DayButton.displayName = "DayButton";
export default withTheme(DayButton);
