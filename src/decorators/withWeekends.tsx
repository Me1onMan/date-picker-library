import React, { ComponentType, FC } from "react";

const withWeekends = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
  const ComponentWithWeekends = (props: P) => {
    return <WrappedComponent {...props} isWithWeekends />;
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithWeekends.displayName = `withWeekends(${displayName})`;

  return ComponentWithWeekends;
};

export default withWeekends;
