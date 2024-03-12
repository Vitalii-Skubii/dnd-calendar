import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

interface WrapperProps {
  withLabels: boolean;
  isCurrent: boolean;
}

export const TasksCellsStyles = {
  Wrapper: styled.div<WrapperProps>`
    position: relative;
    background-color: ${(props) =>
    props.isCurrent ? `${COLORS.currentDate}` : `${COLORS.bgCell}`};
    padding: 5px 10px;
    font-size: 1.2em;
    border: 1px solid ${COLORS.borderCell};
    min-height: 120px;
    max-height: 120px;
    overflow: ${(props) => (props.withLabels === false ? 'hidden' : 'auto')};
    & button {
      visibility: hidden;
    }
    &:hover button {
      visibility: visible;
    }
  `,
  HolidayWrapper: styled.div`
    width: 60%;
  `,
  HeaderWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 5px;
  `,
  TaskThumb: styled.div`
    background-color: ${COLORS.bgLight};
  `,
};
