import React, { ChangeEvent, FC } from 'react';
import { EditableTaskStyles as Styled } from './EditableTask.styles';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ILabel, ITask } from '../Calendar/Calendar.types';
import { TaskLabelList } from '../Tasks/TaskLabelList/TaskLabelList';

interface EditableTaskProps {
  taskInputData: ITask;
  showTaskLabelsThumb: boolean;
  labels: ILabel[];
  handleTaskInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTaskSubmit: () => void;
  handleResetTask: () => void;
  onToggleLabels: () => void;
  handleAddTaskLabels: (label: ILabel) => void;
}

export const EditableTask: FC<EditableTaskProps> = (props) => {
  const {
    labels,
    handleTaskInputChange,
    handleTaskSubmit,
    handleResetTask,
    showTaskLabelsThumb,
    taskInputData,
    onToggleLabels,
    handleAddTaskLabels,
   } = props;

  return (
    <Styled.TaskWrapper>
      <Input
        name="title"
        type="text"
        value={taskInputData.text}
        onChange={handleTaskInputChange}
      />
      <Styled.LabelTaskWrapper>
        <Styled.Toggler onClick={onToggleLabels}>
          <Styled.Label></Styled.Label>
        </Styled.Toggler>
        {showTaskLabelsThumb && (
          <TaskLabelList
            labels={labels}
            handleAddTaskLabels={handleAddTaskLabels}
            taskInputData={taskInputData}
          />
        )}
      </Styled.LabelTaskWrapper>
      <Styled.ButtonWrapper>
        <Button onClick={handleTaskSubmit} icon="done" disabled={false} />
        <Button onClick={handleResetTask} icon="close" disabled={false} />
      </Styled.ButtonWrapper>
    </Styled.TaskWrapper>
  );
};
