/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, FC, ReactNode, useContext, useState } from "react";

export interface IRangeContext {
  startDate: Date;
  endDate: Date;
  setStartDate: (_: Date) => void;
  setEndDate: (_: Date) => void;
  setRangeOnClick: (_: Date) => void;
}

interface IRangeProviderProps {
  children: ReactNode;
}

export const RangeContext = createContext<IRangeContext>({
  startDate: undefined,
  endDate: undefined,
  setStartDate: undefined,
  setEndDate: undefined,
  setRangeOnClick: undefined,
});

export const useRange = () => {
  return useContext(RangeContext);
};

const RangeProvider: FC<IRangeProviderProps> = ({ children }) => {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);

  const setRangeOnClick = (clickedDay: Date) => {
    if (!startDate) {
      setStartDate(clickedDay);
      return;
    }
    if (!endDate) {
      setEndDate(clickedDay);
      return;
    }
    setStartDate(clickedDay);
    setEndDate(undefined);
  };

  const rangeValues: IRangeContext = {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setRangeOnClick,
  };
  return <RangeContext.Provider value={rangeValues}>{children}</RangeContext.Provider>;
};

export default RangeProvider;
