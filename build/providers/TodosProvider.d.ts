import { Dispatch, FC, ReactNode, SetStateAction } from "react";
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
export declare const useTodos: () => ITodosContext;
declare const TodosProvider: FC<ITodosProviderProps>;
export default TodosProvider;
