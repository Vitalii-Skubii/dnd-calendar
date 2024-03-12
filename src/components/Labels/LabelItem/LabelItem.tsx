import React, { FC } from 'react';
import { LabelItemStyles as Styled } from './LabelItem.styles';
import { Button } from '../../Button/Button';
import { EditableLabel } from '../../EditableLabel/EditableLabel';
import { LabelItemProps } from '../types';

export const LabelItem: FC<LabelItemProps> = (props) => {
  const {
    item,
    handleEditLabel,
    handleLabelInputChange,
    handleResetEditLabel,
    labels,
    labelInputData,
    editableLabel,
    handleEditLabelSubmit,
  } = props;

  const onClick = () => {
    handleEditLabel(item.title);
  };

  const isUnique =
    labels.filter(
      (item) => item.title.toLowerCase() === labelInputData.title.toLowerCase()
    ).length <= 1 &&
    labels.filter(
      (item) => item.label.toLowerCase() === labelInputData.label.toLowerCase()
    ).length <= 1 &&
    labelInputData.title.length > 0;

  return (
    <Styled.Wrapper>
      {editableLabel === item.title ? (
        <EditableLabel
          handleLabelInputChange={handleLabelInputChange}
          handleLableSubmit={handleEditLabelSubmit}
          handleResetLabel={handleResetEditLabel}
          isUnique={isUnique}
          labelInputData={labelInputData}
        />
      ) : (
        <Styled.LabelWrapper>
          {item.title}
          <Styled.Label backgroundColor={item.label}></Styled.Label>
          <Button icon="edit" onClick={onClick} disabled={false} />
        </Styled.LabelWrapper>
      )}
    </Styled.Wrapper>
  );
};
