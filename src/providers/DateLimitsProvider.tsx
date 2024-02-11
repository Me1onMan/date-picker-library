import { createContext, useContext } from "react";

export interface IDateLimitsContext {
  minDate: Date;
  maxDate: Date;
}

export const DateLimitsContext = createContext<IDateLimitsContext>({
  minDate: undefined,
  maxDate: undefined,
});

export const useDateLimits = () => {
  return useContext(DateLimitsContext);
};
