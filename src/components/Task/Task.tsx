import React from "react";
import withTheme from "@decorators/withTheme";

import { ITaskProps } from "./interfaces";
import { Checkbox, Container, DeleteButton, TaskTitle } from "./styled";

const Task = ({ isDone, title, onDelete, onCheck }: ITaskProps) => {
  return (
    <Container>
      <Checkbox type="checkbox" checked={isDone} onChange={onCheck} />
      <TaskTitle>{title}</TaskTitle>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </Container>
  );
};

export default withTheme(Task);
