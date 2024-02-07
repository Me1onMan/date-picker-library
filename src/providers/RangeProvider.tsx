/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, FC, ReactNode, useContext, useState } from "react";

interface IRangeContext {
  startDate: Date;
  endDate: Date;
  setStartDate: (_: Date) => void;
  setEndDate: (_: Date) => void;
}

interface IRangeProviderProps {
  children: ReactNode;
}

export const RangeContext = createContext<IRangeContext>({
  startDate: undefined,
  endDate: undefined,
  setStartDate: () => undefined,
  setEndDate: () => undefined,
});

export const useRange = () => {
  return useContext(RangeContext);
};

const RangeProvider: FC<IRangeProviderProps> = ({ children }) => {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);

  const rangeValues: IRangeContext = {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  };
  return <RangeContext.Provider value={rangeValues}>{children}</RangeContext.Provider>;
};

export default RangeProvider;
