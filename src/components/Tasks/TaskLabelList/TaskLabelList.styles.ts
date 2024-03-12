import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const TaskLabelListStyles = {
  Wrapper: styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    background-color: ${COLORS.bgLight};
    top: 30px;
    right: 0;
    padding: 10px;
    width: 80px;
    border: 1px solid ${COLORS.borderSecondary};
    border-radius: 5px;
    z-index:2;
  `,
 };
