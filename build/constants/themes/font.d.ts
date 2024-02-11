export interface IFont {
    family: string;
    size: {
        s: string;
        m: string;
        l: string;
        [code: string]: string;
    };
    weight: {
        regular: number;
        semibold: number;
        bold: number;
        [code: string]: number;
    };
}
declare const FONT: IFont;
export default FONT;
