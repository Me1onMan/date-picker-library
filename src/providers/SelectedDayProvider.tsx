import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";

export interface ISelectedDayContext {
  selectedDay?: Date;
  setSelectedDay: (_: Date) => void;
}

interface ISelectedDayProviderProps {
  children: ReactNode;
}

export const SelectedDayContext = createContext<ISelectedDayContext>({
  selectedDay: undefined,
  setSelectedDay: () => undefined,
});

export const useSelectedDay = () => {
  return useContext(SelectedDayContext);
};

const SelectedDayProvider: FC<ISelectedDayProviderProps> = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState(undefined);

  const slectedDayValues: ISelectedDayContext = useMemo(
    () => ({
      selectedDay,
      setSelectedDay,
    }),
    [selectedDay],
  );
  return (
    <SelectedDayContext.Provider value={slectedDayValues}>{children}</SelectedDayContext.Provider>
  );
};

export default SelectedDayProvider;
