import React from "react";
import withTheme from "@decorators/withTheme";

import { Checkbox, Container, DeleteButton, TaskTitle } from "./styled";

const Task = () => {
  return (
    <Container>
      <Checkbox type="checkbox" />
      <TaskTitle>Do anything...</TaskTitle>
      <DeleteButton>Delete</DeleteButton>
    </Container>
  );
};

export default withTheme(Task);
