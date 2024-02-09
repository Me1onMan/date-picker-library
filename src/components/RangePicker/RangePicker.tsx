import React, { FC, useState } from "react";
import ClearIntervalButton from "@components/ClearIntervalButton/ClearIntervalButton";
import DateInput from "@components/DateInput/DateInput";
import withTheme from "@decorators/withTheme";
import CalendarProvider from "@providers/CalendarProvider";
import { IRangeContext, RangeContext } from "@providers/RangeProvider";

import { IRangePickerProps } from "./interfaces";
import { Container, Label } from "./styled";

const RangePicker: FC<IRangePickerProps> = ({ CalendarView }) => {
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
      <RangeContext.Provider value={dayValue}>
        <Container>
          <Label>From</Label>
          <DateInput onClick={handleClick} selectedDay={startDate} setSelectedDay={setStartDate} />
          <Label>To</Label>
          <DateInput onClick={handleClick} selectedDay={endDate} setSelectedDay={setEndDate} />
          {isOpen && <CalendarView />}
          {(startDate || endDate) && (
            <ClearIntervalButton text="Clear interval" onClick={clearInterval} />
          )}
        </Container>
      </RangeContext.Provider>
    </CalendarProvider>
  );
};

export default withTheme(RangePicker);
