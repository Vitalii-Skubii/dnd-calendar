import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const LabelPickerStyles = {
  Wrapper: styled.div`
    position: relative;
  `,
  Toggler: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    height: 100%;
    width: 40px;
    cursor: pointer;
    border: 1px solid ${COLORS.borderSecondary};
    border-radius: 5px;
    
  `,

  Label: styled.div`
    background-color: ${COLORS.label};
    border-radius: 50%;
    width: 10px;
    height: 10px;
  `,
  MaterialIcon: styled.span`
    font-family: 'Material Icons';
    font-size: 12px;
    color: ${COLORS.primary};
  `,
};
