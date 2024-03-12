import React, { FC } from 'react';
import { TaskLabelItemStyles as Styled } from './TaskLabelItem.styles';
import { isDarkColor } from '../../../helpers/colorHandler';
import { TaskLabelItemProps } from '../types';

export const TaskLabelItem: FC<TaskLabelItemProps> = (props) => {
  const { item, taskInputData, handleAddTaskLabels, filteredLabelData } = props;

  const isPresent =
    (taskInputData?.labels &&
      taskInputData.labels.find((i) => i.title === item.title)) ||
    (filteredLabelData && 
      filteredLabelData.find((i) => i.title === item.title));

  const onClick = () => {
    handleAddTaskLabels(item);
  };

  const dark = isDarkColor(item.label);
  console.log(dark);
  return (
    <Styled.Label bgColor={item.label} onClick={onClick}>
      {!!isPresent && (
        <Styled.MaterialIcon dark={dark}>done</Styled.MaterialIcon>
      )}
    </Styled.Label>
  );
};
