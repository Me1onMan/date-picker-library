export interface IMonthSliderProps {
  year: number;
  month: number;
  goPrevMonth: () => void;
  goNextMonth: () => void;
}

export interface IMonthSliderStyledProps {}

export interface IArrowBtnProps {
  src: string;
}
