import React, {  FC } from 'react';
import { LabelItem } from '../LabelItem/LabelItem';
import { LabelListStyles as Styled } from './LabelList.styles';
import { Button } from '../../Button/Button';
import { EditableLabel } from '../../EditableLabel/EditableLabel';
import { LabelListProps } from '../types';

export const LabelList: FC<LabelListProps> = (props) => {
  const {
    labels,
    labelInputData,
    showNewLabel,
    handleAddNewLabel,
    handleLabelInputChange,
    handleNewLableSubmit,
    handleResetNewLabel,
    handleResetEditLabel,
    handleEditLabel,
    editableLabel,
    handleEditLabelSubmit,
  } = props;

  const isUnique =
    labels.filter(
      (item) => item.title.toLowerCase() === labelInputData.title.toLowerCase()
    ).length === 0 &&
    labels.filter(
      (item) => item.label.toLowerCase() === labelInputData.label.toLowerCase()
    ).length === 0 &&
    labelInputData.title.length > 0;

  console.log(isUnique);
  return (
    <Styled.Wrapper>
      {labels.map((item) => (
        <LabelItem key={item.label} item={item}   labelInputData={labelInputData}
        handleLabelInputChange={handleLabelInputChange} handleResetEditLabel={handleResetEditLabel}
        handleEditLabel={handleEditLabel} editableLabel={editableLabel}
        handleEditLabelSubmit={handleEditLabelSubmit}  labels={labels}/>
      ))}
      {showNewLabel ? (
        <EditableLabel
          labelInputData={labelInputData}
          handleLabelInputChange={handleLabelInputChange}
          handleLableSubmit={handleNewLableSubmit}
          handleResetLabel={handleResetNewLabel}
          isUnique={isUnique}
        />
      ) : (
        <Button onClick={handleAddNewLabel} icon="add" disabled={false} />
      )}
    </Styled.Wrapper>
  );
};
