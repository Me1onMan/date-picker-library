import React, { ChangeEvent, useState } from "react";
import Task from "@components/Task/Task";
import withTheme from "@decorators/withTheme";
import { ITodo, useTodos } from "@providers/TodosProvider";
import { isDaysEqual } from "@utils/calculateDates";
import formatDate from "@utils/formatDate";

import { IModalProps } from "./interfaces";
import {
  AddButton,
  CloseButton,
  Container,
  Input,
  InputContainer,
  TasksContainer,
  Title,
  Wrapper,
} from "./styled";

const ModalTasks = ({ date, onClose }: IModalProps) => {
  const { todos, setTodos } = useTodos();
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: ITodo = {
      date,
      title: inputText,
      isDone: false,
    };
    setInputText("");
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDelete = (title: string) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => {
        if (todo.title === title && isDaysEqual(todo.date, date)) return false;
        return true;
      }),
    );
  };

  const handleCheck = (title: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.title === title && isDaysEqual(todo.date, date))
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        return todo;
      }),
    );
  };

  return (
    <Wrapper>
      <Container>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Tasks for {formatDate(date)}</Title>
        <InputContainer>
          <Input value={inputText} onChange={handleChange} />
          <AddButton onClick={handleAddTodo}>Add task</AddButton>
        </InputContainer>
        <TasksContainer>
          {todos
            .filter((todo) => isDaysEqual(todo.date, date))
            .map((todo) => (
              <Task
                isDone={todo.isDone}
                title={todo.title}
                onDelete={() => handleDelete(todo.title)}
                onCheck={() => handleCheck(todo.title)}
                key={todo.title}
              />
            ))}
        </TasksContainer>
      </Container>
    </Wrapper>
  );
};

export default withTheme(ModalTasks);
