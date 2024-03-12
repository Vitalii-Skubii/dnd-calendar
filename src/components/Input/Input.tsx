import React, { ChangeEvent, FC } from 'react';
import { InputStyles as Styled } from './Input.styles';

interface IProps {
  type: 'text' | 'color' | 'file';
  value: string;
  name: string;
  accept?: string;
  id?: string;
  display?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IProps> = (props) => {
  const { type, value, name, onChange, accept, id, display } = props;
  return (
    <Styled.Input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      accept={accept}
      display={display}
      id={id}
    />
  );
};
