import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const LabelListStyles = {
  Wrapper: styled.div`
    position: absolute;
    background-color: ${COLORS.bgLight};
    top: 30px;
    right: 0;
    padding: 10px;
    width: 200px;
    border: 1px solid ${COLORS.borderSecondary};
    border-radius: 5px;
    z-index: 1;
  `,
 };
