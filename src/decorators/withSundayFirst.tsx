/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, { ComponentType, FC } from "react";

const withSundayFirst =
  <P extends object>(Component: ComponentType<P>): FC<P> =>
  (props: P) => {
    return <Component {...props} isSundayFirst />;
  };

export default withSundayFirst;
