/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, FC, ReactNode, useContext, useState } from "react";

interface ICalendarContext {
  today: Date;
  selectedDay?: Date;
  selectedMonth: number;
  selectedYear: number;
  setSelectedDay: (_: Date) => void;
  setSelectedMonth: (_: number) => void;
  setSelectedYear: (_: number) => void;
  isSundayFirst: boolean;
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
  isSundayFirst: false,
});

export const useCalendar = () => {
  return useContext(CalendarContext);
};

const CalendarProvider: FC<ICalendarProviderProps> = ({ children }) => {
  const [today] = useState(now);
  const [selectedDay, setSelectedDay] = useState(undefined);
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  const calendarValues: ICalendarContext = {
    today,
    selectedDay,
    selectedMonth,
    selectedYear,
    setSelectedDay,
    setSelectedMonth,
    setSelectedYear,
    isSundayFirst: false,
  };
  return <CalendarContext.Provider value={calendarValues}>{children}</CalendarContext.Provider>;
};

export default CalendarProvider;
