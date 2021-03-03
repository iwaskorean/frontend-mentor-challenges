import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__logo {
    width: 10rem;
  }

  .header__nav__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header__nav {
      color: var(--Very-Dark-Blue);
      margin: 0 1rem;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: var(--dark-grayish-blue);
      }
    }
  }
`;
