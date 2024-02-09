export interface ITaskProps {
  isDone: boolean;
  title: string;
  onDelete: () => void;
  onCheck: () => void;
}
