import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";

interface ICalendarContext {
  today: Date;
  selectedDay?: Date;
  selectedMonth: number;
  selectedYear: number;
  setSelectedDay: (_: Date) => void;
  setSelectedMonth: (_: number) => void;
  setSelectedYear: (_: number) => void;
}

interface ICalendarProviderProps {
  children: ReactNode;
}

const now = new Date();

const CalendarContext = createContext<ICalendarContext>({
  today: now,
  selectedDay: undefined,
  selectedMonth: now.getMonth(),
  selectedYear: now.getFullYear(),
  setSelectedDay: () => undefined,
  setSelectedMonth: () => undefined,
  setSelectedYear: () => undefined,
});

export const useCalendar = () => {
  return useContext(CalendarContext);
};

const CalendarProvider: FC<ICalendarProviderProps> = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState(undefined);
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth());
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());

  const calendarValues: ICalendarContext = useMemo(
    () => ({
      today: now,
      selectedDay,
      selectedMonth,
      selectedYear,
      setSelectedDay,
      setSelectedMonth,
      setSelectedYear,
    }),
    [selectedDay, selectedMonth, selectedYear],
  );
  return <CalendarContext.Provider value={calendarValues}>{children}</CalendarContext.Provider>;
};

export default CalendarProvider;
