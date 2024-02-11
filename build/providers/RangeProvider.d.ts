import React, { FC, ReactNode } from "react";
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
export declare const RangeContext: React.Context<IRangeContext>;
export declare const useRange: () => IRangeContext;
declare const RangeProvider: FC<IRangeProviderProps>;
export default RangeProvider;
