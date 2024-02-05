import React from "react";
import withTheme from "@decorators/withTheme";

import Task from "./Task/Task";
import {
  AddButton,
  CloseButton,
  Container,
  Input,
  InputContainer,
  TasksContainer,
  Title,
} from "./styled";

const ModalTasks = () => {
  const date = "05.02.2024";
  return (
    <Container>
      <CloseButton>×</CloseButton>
      <Title>Tasks for {date}</Title>
      <InputContainer>
        <Input />
        <AddButton>Add task</AddButton>
      </InputContainer>
      <TasksContainer>
        <Task />
        <Task />
        <Task />
      </TasksContainer>
    </Container>
  );
};

export default withTheme(ModalTasks);
