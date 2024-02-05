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

const FONT: IFont = {
  family: "Open sans, sans-serif",
  size: {
    s: "13px",
    m: "14px",
    l: "15px",
  },
  weight: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
};

export default FONT;
