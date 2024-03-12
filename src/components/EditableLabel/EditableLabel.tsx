import React, { ChangeEvent, FC } from 'react';
import { EditableLabelStyles as Styled } from './EditableLabel.styles';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ILabelInputData } from '../Calendar/Calendar.types';

interface EditableLabelProps {
  labelInputData: ILabelInputData;
  handleLabelInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleLableSubmit: () => void;
  handleResetLabel: () => void;
  isUnique: boolean;
}

export const EditableLabel: FC<EditableLabelProps> = (props) => {
  const {
    handleLabelInputChange,
    handleLableSubmit,
    handleResetLabel,
    isUnique,
    labelInputData,
  } = props;
  return (
    <Styled.NewLabel>
      <Input
        name="title"
        type="text"
        value={labelInputData.title}
        onChange={handleLabelInputChange}
      />
      <Input
        name="label"
        type="color"
        value={labelInputData.label}
        onChange={handleLabelInputChange}
      />
      <Styled.ButtonWrapper>
        <Button
          onClick={handleLableSubmit}
          icon="done"
          disabled={!isUnique}
        />
        <Button onClick={handleResetLabel} icon="close" disabled={false} />
      </Styled.ButtonWrapper>
    </Styled.NewLabel>
  );
};
