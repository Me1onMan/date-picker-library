import React, { ComponentType, FC } from "react";

const withSundayFirst = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
  const ComponentWithHolidays = (props: P) => <WrappedComponent {...props} isSundayFirst />;

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithHolidays.displayName = `withSundayFirst(${displayName})`;

  return ComponentWithHolidays;
};

export default withSundayFirst;
