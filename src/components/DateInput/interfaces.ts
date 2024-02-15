export interface IInputProps {
  onClick: () => void;
  selectedDay: Date | undefined;
  setSelectedDay: (_: Date | undefined) => void;
}
