import styled, { createGlobalStyle } from 'styled-components';
import bgPatternTop from '../assets/bg-tablet-pattern.svg';

export const GlobalStyle = createGlobalStyle`

:root{
  --bright-red: hsl(12, 88%, 59%);
  --dark-blue: hsl(228, 39%, 23%);
  --dark-grayish-blue: hsl(227, 12%, 61%);
  --very-dark-blue: hsl(233, 12%, 13%);
  --very-pale-red: hsl(13, 100%, 96%);
  --very-light-gray: hsl(0, 0%, 98%);
}

* {
  box-sizing: border-box;
  margin:0;
  padding: 0;
}

html,button {
  font-family: 'Be Vietnam', sans-serif;
  font-size: 16px;
  @media(max-width: 1024px) {
    font-size: 14px;
  } 
  @media(max-width: 850px) {
    font-size: 12px;
  } 
}
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: no-repeat url(${bgPatternTop}) 120% -5%,
    no-repeat url(${bgPatternTop}) -60% 55%;
  background-size: 55vw;
  @media (max-width: 768px) {
    background: no-repeat url(${bgPatternTop}) 120% -5%;
    background-size: 55vw;
  }
  @media (max-width: 500px) {
    background: no-repeat url(${bgPatternTop}) 170% -3%;
    background-size: 80vw;
  }
`;
