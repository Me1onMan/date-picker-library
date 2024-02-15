import { IColors } from "./themes/colors";
import { IFont } from "./themes/font";
import { ISize } from "./themes/size";
interface ITheme {
    color: IColors;
    font: IFont;
    size: ISize;
}
declare const theme: ITheme;
export default theme;
