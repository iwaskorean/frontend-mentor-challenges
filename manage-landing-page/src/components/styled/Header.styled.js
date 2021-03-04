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
    &.mobile {
      display: none;
    }
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

  .modal {
    position: absolute;
    padding: 2rem 3rem;
    text-align: center;
    top: 5rem;
    width: 90%;
    background-color: #fff;
    box-shadow: 3px 3px 10px rgba(170, 170, 170, 0.8);
    border-radius: 5px;
    transform: translateY(-150%);
    transition: all 0.3s;
    &.active {
      transform: translateY(0%);
    }
    .modal__nav {
      width: 100%;
      margin: 2rem 0;
      font-weight: 700;
      color: var(--very-dark-blue);
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    .desktop {
      display: none;
    }
    .header__nav__container {
      &.mobile {
        display: block;
      }
    }
    .icon-hamburger {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
  }
`;
