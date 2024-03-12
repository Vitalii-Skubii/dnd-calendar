import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const TaskStyles = {
  Container: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 100%;
    height: 25px;
    margin-bottom: 5px;
    background-color: ${COLORS.bgCell};
    border: 1px solid ${COLORS.borderTask};
  `,
  UnEditableWrapper: styled.div`
    overflow: hidden;
  `,
  TaskWrapper: styled.div`
    width: 100%;
    padding: 1px;
    display: flex;
    flex-direction: column;
    @media (min-width: 980px) {
      min-width: 100px;
    }
  `,
  LabelWrapper: styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
  `,
  Label: styled.div<{ bgColor: string }>`
    flex-grow: 1;
    height: 3px;
    margin: 0 1px;
    border-radius: 1px;
    background-color: ${(props) => props.bgColor};
  `,
  TextWrapper: styled.div`
    text-align: center;
    width: 100%;
    overflow: hidden;
  `,
  ButtonWrapper: styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
  `,
};
