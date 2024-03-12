import React, { FC } from 'react';
import { ButtonStyles as Styled } from './Button.styles';

interface IProps {
  onClick: () => void;
  icon: string;
  disabled: boolean;
}

export const Button: FC<IProps> = (props) => {
  const { onClick, icon, disabled } = props;

  return (
    <Styled.Button onClick={onClick} disabled={disabled}>
      <Styled.MaterialIcon>{icon}</Styled.MaterialIcon>
    </Styled.Button>
  );
};
