import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

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
  const [startDate, setStartDate] = useState<Date>(undefined);
  const [endDate, setEndDate] = useState<Date>(undefined);

  const setRangeOnClick = useCallback(
    (clickedDay: Date) => {
      if (!startDate) {
        setStartDate(clickedDay);
        return;
      }
      if (!endDate) {
        setEndDate(clickedDay);
        return;
      }

      if (clickedDay.getTime() < (startDate.getTime() + endDate.getTime()) / 2) {
        setStartDate(clickedDay);
        return;
      }
      setEndDate(clickedDay);
    },
    [startDate, endDate],
  );

  const rangeValues: IRangeContext = useMemo(
    () => ({
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      setRangeOnClick,
    }),
    [startDate, endDate, setRangeOnClick],
  );
  return <RangeContext.Provider value={rangeValues}>{children}</RangeContext.Provider>;
};

export default RangeProvider;
