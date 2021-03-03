import styled, { createGlobalStyle } from 'styled-components';

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
}
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
