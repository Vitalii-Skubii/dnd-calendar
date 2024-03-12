import React, { FC } from 'react';
import { LabelTogglerStyles as Styled } from './LabelToggler.styles';
import { TaskLabelList } from '../../Tasks/TaskLabelList/TaskLabelList';
import { LabelTogglerProps } from '../types';

export const LabelToggler: FC<LabelTogglerProps> = (props) => {
  const {
    isIconed,
    labels,
    showTaskLabelsThumb,
    filteredLabels,
    onToggleLabels,
    handleAddTaskLabels,
  } = props;
  return (
    <Styled.LabelTaskWrapper>
      <Styled.Toggler onClick={onToggleLabels}>
        <Styled.Label></Styled.Label>
        {isIconed && <Styled.MaterialIcon>filter_alt</Styled.MaterialIcon>}
      </Styled.Toggler>

      {showTaskLabelsThumb && (
        <TaskLabelList
          labels={labels}
          handleAddTaskLabels={handleAddTaskLabels}
          filteredLabelData={filteredLabels}
        />
      )}
    </Styled.LabelTaskWrapper>
  );
};
