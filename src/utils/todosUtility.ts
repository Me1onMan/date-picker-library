import { ITodo } from "@providers/TodosProvider";

const TODOS_NAME = "todos";

export const getCachedTodos = (): ITodo[] => {
  const stringifyTodos = localStorage.getItem(TODOS_NAME);
  return JSON.parse(stringifyTodos);
};

export const setCachedTodos = (newTodos: ITodo[]) => {
  const stringifyTodos = JSON.stringify(newTodos);
  localStorage.setItem(TODOS_NAME, stringifyTodos);
};
