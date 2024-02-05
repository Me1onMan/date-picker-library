export interface IColors {
  grayPrimary: string;
  hover: string;
  placeholder: string;
  border: string;
  white: string;
  textPrimary: string;
  textSecondary: string;
  daySelected: string;
  dayIntervalEdge: string;
  dayIntervalMid: string;
  red: string;
  [code: string]: string;
}

const COLORS: IColors = {
  grayPrimary: "#AAA",
  hover: "#F1F1F1",
  placeholder: "#BBB",
  border: "#DDD",
  white: "#FFF",
  textPrimary: "#FFF",
  textSecondary: "#333",
  daySelected: "rgba(47, 128, 237, 1)",
  dayIntervalEdge: "rgba(47, 128, 237, 0.6)",
  dayIntervalMid: "rgba(47, 128, 237, 0.1)",
  red: "#F00",
};

export default COLORS;
