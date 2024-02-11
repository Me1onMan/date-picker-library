import React, { ComponentType, FC } from "react";

const withHolidays = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
  const ComponentWithHolidays = (props: P) => <WrappedComponent {...props} isWithHolidays />;

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithHolidays.displayName = `withHolidays(${displayName})`;

  return ComponentWithHolidays;
};

export default withHolidays;
