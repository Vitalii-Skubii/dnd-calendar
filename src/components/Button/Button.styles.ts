import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const ButtonStyles = {
  MaterialIcon: styled.span`
    font-family: 'Material Icons';
    font-size: 12px;
    color: ${COLORS.primary};
  `,
  Button: styled.button<{disabled:boolean}>`
    border: 1px solid ${COLORS.border};
    outline: none;
    width: 16px;
    height: 16px;
    padding: 1px;
    cursor: ${(props) => (props.disabled ? 'not-allowed':'pointer')};
    border-radius: 50%;
`
};
