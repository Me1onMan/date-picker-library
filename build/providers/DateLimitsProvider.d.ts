/// <reference types="react" />
export interface IDateLimitsContext {
    minDate: Date;
    maxDate: Date;
}
export declare const DateLimitsContext: import("react").Context<IDateLimitsContext>;
export declare const useDateLimits: () => IDateLimitsContext;
