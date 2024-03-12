import React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { EditableTask } from '../../EditableTask/EditableTask';
import { TaskStyles as Styled } from './Task.styles';
import { Button } from '../../Button/Button';
import { TaskProps } from '../types';

export const Task: React.FC<TaskProps> = ({
  task,
  index,
  labels,
  taskInputData,
  showTaskLabelsThumb,
  handleTaskInputChange,
  handleResetEditTask,
  handleAddTaskLabels,
  handleEditTask,
  editableTask,
  handleToggleTaskLabels,
  handleTaskSubmit,
  cellId,
}) => {
  const onClick = () => {
    handleEditTask(task.id);
  };

  const onEditTaskSubmit = () => {
    handleTaskSubmit(task.id, cellId);
  };

  console.log(editableTask, 'Ed');

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: DraggableProvided) => (
        <Styled.Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {editableTask === task.id ? (
            <EditableTask
              showTaskLabelsThumb={showTaskLabelsThumb}
              handleAddTaskLabels={handleAddTaskLabels}
              handleResetTask={handleResetEditTask}
              handleTaskInputChange={handleTaskInputChange}
              handleTaskSubmit={onEditTaskSubmit}
              labels={labels}
              onToggleLabels={handleToggleTaskLabels}
              taskInputData={taskInputData}
            />
          ) : (
            <Styled.UnEditableWrapper>
              <Styled.TaskWrapper>
                <Styled.LabelWrapper>
                  {task.labels.map((item) => (
                    <Styled.Label
                      key={item.title}
                      bgColor={item.label}
                    ></Styled.Label>
                  ))}
                </Styled.LabelWrapper>

                <Styled.TextWrapper> {task.text}</Styled.TextWrapper>
              </Styled.TaskWrapper>
              <Styled.ButtonWrapper>
                <Button icon="edit" onClick={onClick} disabled={false} />
              </Styled.ButtonWrapper>
            </Styled.UnEditableWrapper>
          )}
        </Styled.Container>
      )}
    </Draggable>
  );
};
