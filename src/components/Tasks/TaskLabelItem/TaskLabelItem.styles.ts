import { COLORS } from './../../../styles/colors';
import styled from 'styled-components';


export const TaskLabelItemStyles = {
  Label: styled.div<{bgColor: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right:2px;
  margin-bottom: 2px;
  cursor: pointer;
`,
  MaterialIcon: styled.span<{dark:boolean}>`
  font-family: 'Material Icons';
  font-size: 12px;
  color: ${(props) => props.dark?`${COLORS.bgLight}`:`${COLORS.bgDark}`};
`,
 
 
};
 