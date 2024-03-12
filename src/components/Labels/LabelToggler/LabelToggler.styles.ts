import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const LabelTogglerStyles = {
  TaskWrapper: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  ButtonWrapper: styled.div`
    position: absolute;
    top: -10px;
    right: -25px;
    display: flex;
    width: 35px;
    justify-content: space-between;
  `,

  LabelTaskWrapper: styled.div`
    position: relative;
    margin-left: 5px;
  `,

  Toggler: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    height: 100%;
    cursor: pointer;
    border: 1px solid ${COLORS.borderSecondary};
    border-radius: 5px;
  `,

  Label: styled.div`
    background-color:${COLORS.label};
    border-radius: 50%;
    width: 10px;
    height: 10px;
  `,
  
   MaterialIcon: styled.span`
   font-family: 'Material Icons';
   font-size: 12px;
   color:${COLORS.primary};
 `,
};
