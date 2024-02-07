/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, FC, ReactNode, useContext, useState } from "react";

interface ISelectedDayContext {
  selectedDay?: Date;
  setSelectedDay: (_: Date) => void;
}

interface ISelectedDayProviderProps {
  children: ReactNode;
}

const SelectedDayContext = createContext<ISelectedDayContext>({
  selectedDay: undefined,
  setSelectedDay: () => undefined,
});

export const useSelectedDay = () => {
  return useContext(SelectedDayContext);
};

const SelectedDayProvider: FC<ISelectedDayProviderProps> = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState(undefined);

  const slectedDayValues: ISelectedDayContext = {
    selectedDay,
    setSelectedDay,
  };
  return (
    <SelectedDayContext.Provider value={slectedDayValues}>{children}</SelectedDayContext.Provider>
  );
};

export default SelectedDayProvider;
