import React, { ComponentType, FC, useState } from "react";
import ClearIntervalButton from "@components/FunctionalButton/FunctionalButton";
import ModalTasks from "@components/ModalTasks/ModalTasks";
import { useSelectedDay } from "@providers/SelectedDayProvider";
import TodosProvider from "@providers/TodosProvider";

const withTodos = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
  const ComponentWithTodos = (props: P) => {
    const { selectedDay } = useSelectedDay();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <TodosProvider>
        <WrappedComponent {...props} />
        {selectedDay && <ClearIntervalButton text="Add task" onClick={openModal} />}
        {isModalOpen && <ModalTasks date={selectedDay} onClose={closeModal} />}
      </TodosProvider>
    );
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithTodos.displayName = `withTodos(${displayName})`;

  return ComponentWithTodos;
};

export default withTodos;
