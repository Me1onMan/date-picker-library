import React, { FC, useCallback, useMemo, useState } from "react";
import DateInput from "@components/DateInput/DateInput";
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary";
import FunctionalButton from "@components/FunctionalButton/FunctionalButton";
import withTheme from "@decorators/withTheme";
import CalendarProvider from "@providers/CalendarProvider";
import { DateLimitsContext } from "@providers/DateLimitsProvider";
import { IRangeContext, RangeContext } from "@providers/RangeProvider";

import { IRangePickerProps } from "./interfaces";
import { Container, Label } from "./styled";

const RangePicker: FC<IRangePickerProps> = ({ CalendarView, minDate, maxDate }) => {
  const limitsValue = useMemo(() => ({ minDate, maxDate }), [minDate, maxDate]);
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const setRangeOnClick = useCallback(
    (clickedDate: Date) => {
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
    },
    [startDate, endDate],
  );

  const clearInterval = () => {
    setStartDate(undefined);
    setEndDate(undefined);
  };

  const dayValue: IRangeContext = useMemo(
    () => ({
      startDate,
      endDate,
      setStartDate,
      setEndDate,
      setRangeOnClick,
    }),
    [startDate, endDate, setRangeOnClick],
  );

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default withTheme(RangePicker);
