import React, { FC } from 'react';
import { LabelPickerStyles as Styled } from './LabelPicker.styles';
import { LabelList } from '../LabelList/LabelList';
import { ILabelPicker } from '../types';

export const LabelPicker: FC<ILabelPicker> = (props) => {
  const {
    labels,
    show,
    onToggleLabels,
    handleAddNewLabel,
    showNewLabel,
    labelInputData,
    editableLabel,
    handleEditLabelSubmit,
    handleLabelInputChange,
    handleNewLableSubmit,
    handleResetNewLabel,
    handleResetEditLabel,
    handleEditLabel,
    isIconed,
  } = props;

  return (
    <Styled.Wrapper>
      <Styled.Toggler onClick={onToggleLabels}>
        <Styled.Label></Styled.Label>
        {isIconed && <Styled.MaterialIcon>edit</Styled.MaterialIcon>}
      </Styled.Toggler>

      {show && (
        <LabelList
          labels={labels}
          handleAddNewLabel={handleAddNewLabel}
          showNewLabel={showNewLabel}
          labelInputData={labelInputData}
          handleLabelInputChange={handleLabelInputChange}
          handleNewLableSubmit={handleNewLableSubmit}
          handleResetNewLabel={handleResetNewLabel}
          handleResetEditLabel={handleResetEditLabel}
          handleEditLabel={handleEditLabel}
          editableLabel={editableLabel}
          handleEditLabelSubmit={handleEditLabelSubmit}
        />
      )}
    </Styled.Wrapper>
  );
};
