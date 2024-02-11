export interface IBorder {
    line: {
        primary: string;
        [code: string]: string;
    };
    radius: {
        primary: string;
        bottom: string;
        top: string;
        dayRangeStart: string;
        dayRangeEnd: string;
        [code: string]: string;
    };
}
declare const BORDERS: IBorder;
export default BORDERS;
