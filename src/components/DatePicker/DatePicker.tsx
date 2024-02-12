import React, { FC, useMemo, useState } from "react";
import DateInput from "@components/DateInput/DateInput";
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary";
import withTheme from "@decorators/withTheme";
import CalendarProvider from "@providers/CalendarProvider";
import { DateLimitsContext } from "@providers/DateLimitsProvider";
import { ISelectedDayContext, SelectedDayContext } from "@providers/SelectedDayProvider";

import { IDatePickerProps } from "./interfaces";
import { Container, Label } from "./styled";

const DatePicker: FC<IDatePickerProps> = ({ CalendarView, minDate, maxDate }) => {
  const limitsValue = useMemo(() => ({ minDate, maxDate }), [minDate, maxDate]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date>();
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const dayValue: ISelectedDayContext = useMemo(
    () => ({
      selectedDay,
      setSelectedDay,
    }),
    [selectedDay],
  );

  return (
    <ErrorBoundary>
      <CalendarProvider>
        <DateLimitsContext.Provider value={limitsValue}>
          <SelectedDayContext.Provider value={dayValue}>
            <Container>
              <Label>Date</Label>
              <DateInput
                onClick={handleClick}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              />
              {isOpen && <CalendarView />}
            </Container>
          </SelectedDayContext.Provider>
        </DateLimitsContext.Provider>
      </CalendarProvider>
    </ErrorBoundary>
  );
};

export default withTheme(DatePicker);
