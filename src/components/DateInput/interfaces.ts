export interface IInputProps {
  onClick: () => void;
  selectedDay: Date;
  setSelectedDay: (_: Date) => void;
}

export interface IButtonProps {
  src: string;
}
