/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCachedTodos, setCachedTodos } from "@utils/todosUtility";

export interface ITodo {
  date: Date;
  title: string;
  isDone: boolean;
}

interface ITodosContext {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

interface ITodosProviderProps {
  children: ReactNode;
}

const TodosContext = createContext<ITodosContext>({
  todos: [],
  setTodos: () => undefined,
});

export const useTodos = () => {
  return useContext(TodosContext);
};

const TodosProvider: FC<ITodosProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState(getCachedTodos() || []);

  useEffect(() => {
    setCachedTodos(todos);
  }, [todos]);

  const slectedDayValues: ITodosContext = {
    todos,
    setTodos,
  };
  return <TodosContext.Provider value={slectedDayValues}>{children}</TodosContext.Provider>;
};

export default TodosProvider;
