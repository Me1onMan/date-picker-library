import React, { FC } from "react";
import withTheme from "@decorators/withTheme";

import { IFuncButtonProps } from "./interfaces";
import Button from "./styled";

const ClearIntervalButton: FC<IFuncButtonProps> = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default withTheme(ClearIntervalButton);
