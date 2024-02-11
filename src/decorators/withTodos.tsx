/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, { ComponentType, FC, useState } from "react";
import ClearIntervalButton from "@components/FunctionalButton/FunctionalButton";
import ModalTasks from "@components/ModalTasks/ModalTasks";
import { useSelectedDay } from "@providers/SelectedDayProvider";
import TodosProvider from "@providers/TodosProvider";

const withTodos =
  <P extends object>(Component: ComponentType<P>): FC<P> =>
  (props: P) => {
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
        <Component {...props} />
        {selectedDay && <ClearIntervalButton text="Add task" onClick={openModal} />}
        {isModalOpen && <ModalTasks date={selectedDay} onClose={closeModal} />}
      </TodosProvider>
    );
  };

export default withTodos;
