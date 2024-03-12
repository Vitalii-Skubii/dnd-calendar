import styled from 'styled-components';

export const CalendarStyles = {
  Container: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    flex: 1 0 auto;
    position: relative;
    padding: 20px 0;
  `,
  Calendar: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  Days: styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 90%;
  `,
  Week: styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 5px 0;
  `,
};
