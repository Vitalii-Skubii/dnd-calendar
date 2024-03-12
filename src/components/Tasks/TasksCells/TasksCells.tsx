import React from 'react';
import { TasksCellsStyles as Styled } from './TasksCells.styles';
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';
import { Task } from '../Task/Task';
import { EditableTask } from '../../EditableTask/EditableTask';
import { Button } from '../../Button/Button';
import { ITasksCells } from '../types';
import { publicHolidayHandler } from '../../../helpers/publicHolidayHandler';

export const TasksCells: React.FC<ITasksCells> = (props) => {
  const {
    index,
    value,
    tasks,
    id,
    labels,
    publicHolidays,
    onAddTask,
    editableTask,
    taskCell,
    taskInputData,
    showTaskLabelsThumb,
    handleEditTaskSubmit,
    handleResetEditTask,
    handleNewTaskSubmit,
    handleTaskInputChange,
    handleResetNewTask,
    handleEditTask,
    handleToggleTaskLabels,
    handleAddTaskLabels,
  } = props;

  const currentDate = `${new Date().getFullYear()}${(new Date().getMonth() + 1)
    .toString()
    .padStart(2, '0')}${new Date().getDate().toString().padStart(2, '0')}`;

  const onClick = () => {
    onAddTask(id);
  };

  const publicHoliday = publicHolidayHandler(id, publicHolidays);

  return (
    <Styled.Wrapper
      key={index}
      isCurrent={id === currentDate}
      withLabels={!!tasks.length}
    >
      <Styled.HeaderWrapper>
        {value !== null && value}{' '}
        {publicHoliday && (
          <Styled.HolidayWrapper>{publicHoliday}</Styled.HolidayWrapper>
        )}
        <Button icon="add" onClick={onClick} disabled={false} />
      </Styled.HeaderWrapper>
      <Droppable droppableId={id} type="task">
        {(prov: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div ref={prov.innerRef} {...prov.droppableProps}>
            {tasks?.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                editableTask={editableTask}
                showTaskLabelsThumb={showTaskLabelsThumb}
                handleEditTask={handleEditTask}
                handleToggleTaskLabels={handleToggleTaskLabels}
                handleResetEditTask={handleResetEditTask}
                handleAddTaskLabels={handleAddTaskLabels}
                handleTaskInputChange={handleTaskInputChange}
                labels={labels}
                taskInputData={taskInputData}
                handleTaskSubmit={handleEditTaskSubmit}
                cellId={id}
              />
            ))}
            {prov.placeholder}
          </div>
        )}
      </Droppable>
      {taskCell === id && (
        <EditableTask
          showTaskLabelsThumb={showTaskLabelsThumb}
          handleAddTaskLabels={handleAddTaskLabels}
          handleResetTask={handleResetNewTask}
          handleTaskInputChange={handleTaskInputChange}
          handleTaskSubmit={handleNewTaskSubmit}
          labels={labels}
          onToggleLabels={handleToggleTaskLabels}
          taskInputData={taskInputData}
        />
      )}
    </Styled.Wrapper>
  );
};
