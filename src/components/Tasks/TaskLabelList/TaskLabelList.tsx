import React, { FC } from 'react';
import { TaskLabelListStyles as Styled } from './TaskLabelList.styles';
import { TaskLabelItem } from '../TaskLabelItem/TaskLabelItem';
import { TaskLabelListProps } from '../types';

export const TaskLabelList: FC<TaskLabelListProps> = (props) => {
  const { labels, taskInputData, handleAddTaskLabels, filteredLabelData } =
    props;

  return (
    <Styled.Wrapper>
      {labels.map((item) => (
        <TaskLabelItem
          key={item.label}
          item={item}
          handleAddTaskLabels={handleAddTaskLabels}
          taskInputData={taskInputData}
          filteredLabelData={filteredLabelData}
        />
      ))}
    </Styled.Wrapper>
  );
};
