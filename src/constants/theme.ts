import BORDERS, { IBorder } from "./themes/border";
import COLORS, { IColors } from "./themes/colors";
import FONT, { IFont } from "./themes/font";
import SIZES, { ISize } from "./themes/size";

interface ITheme {
  color: IColors;
  font: IFont;
  size: ISize;
  border: IBorder;
}
const theme: ITheme = {
  size: { ...SIZES },
  font: { ...FONT },
  color: { ...COLORS },
  border: { ...BORDERS },
};

export default theme;
