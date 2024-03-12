import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

interface InputType {
  type: string;
  display?: string
}

export const InputStyles = {
  Wrapper: styled.div`
    position: relative;
  `,
  Input: styled.input<InputType>`
    display:${(props) => (props.display === 'none' && 'none')};
    height: ${(props) => (props.type === 'color' ? '20px' : '20px')};
    width: ${(props) => (props.type === 'color' ? '20px' : '100%')};
    padding: ${(props) => (props.type === 'color' ? 0 : '3px')};
    border-radius: 5px;
    border: 1px solid ${COLORS.border};
    outline: none;
  `,
};
