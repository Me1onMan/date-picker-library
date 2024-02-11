import React, { FC, useState } from "react";
import DateInput from "@components/DateInput/DateInput";
import FunctionalButton from "@components/FunctionalButton/FunctionalButton";
import withTheme from "@decorators/withTheme";
import CalendarProvider from "@providers/CalendarProvider";
import { DateLimitsContext } from "@providers/DateLimitsProvider";
import { IRangeContext, RangeContext } from "@providers/RangeProvider";

import { IRangePickerProps } from "./interfaces";
import { Container, Label } from "./styled";

const RangePicker: FC<IRangePickerProps> = ({ CalendarView, minDate, maxDate }) => {
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const limitsValue = { minDate, maxDate };
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const setRangeOnClick = (clickedDate: Date) => {
    if (!startDate) {
      setStartDate(clickedDate);
      return;
    }
    if (!endDate) {
      if (startDate.getTime() > clickedDate.getTime()) {
        setStartDate(clickedDate);
        return;
      }
      setEndDate(clickedDate);
      return;
    }
    setStartDate(clickedDate);
    setEndDate(undefined);
  };

  const clearInterval = () => {
    setStartDate(undefined);
    setEndDate(undefined);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const dayValue: IRangeContext = {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setRangeOnClick,
  };

  return (
    <CalendarProvider>
      <DateLimitsContext.Provider value={limitsValue}>
        <RangeContext.Provider value={dayValue}>
          <Container>
            <Label>From</Label>
            <DateInput
              onClick={handleClick}
              selectedDay={startDate}
              setSelectedDay={setStartDate}
            />
            <Label>To</Label>
            <DateInput onClick={handleClick} selectedDay={endDate} setSelectedDay={setEndDate} />
            {isOpen && <CalendarView />}
            {(startDate || endDate) && (
              <FunctionalButton text="Clear interval" onClick={clearInterval} />
            )}
          </Container>
        </RangeContext.Provider>
      </DateLimitsContext.Provider>
    </CalendarProvider>
  );
};

export default withTheme(RangePicker);
