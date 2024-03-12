import styled from 'styled-components';

interface ILabelProps {
  backgroundColor: string;
}

export const LabelItemStyles = {
  Wrapper: styled.div``,
  LabelWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
  `,
  Label: styled.div<ILabelProps>`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 50%;
    width: 10px;
    height: 10px;
  `,
};
 