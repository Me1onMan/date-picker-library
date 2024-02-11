import React, { FC, ReactNode } from "react";
export interface ISelectedDayContext {
    selectedDay?: Date;
    setSelectedDay: (_: Date) => void;
}
interface ISelectedDayProviderProps {
    children: ReactNode;
}
export declare const SelectedDayContext: React.Context<ISelectedDayContext>;
export declare const useSelectedDay: () => ISelectedDayContext;
declare const SelectedDayProvider: FC<ISelectedDayProviderProps>;
export default SelectedDayProvider;
