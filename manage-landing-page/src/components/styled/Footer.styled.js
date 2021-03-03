import styled from 'styled-components';
import simplifyBgImg from '../assets/bg-simplify-section-desktop.svg';

export const SimplifyWrapper = styled.div`
  width: 100%;
  background: no-repeat url(${simplifyBgImg});
  background-size: cover;
  background-color: var(--bright-red);
  .simplify__container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .simplify__heading {
      width: 50%;
      font-size: 2.6rem;
      color: var(--very-light-gray);
      font-weight: 700;
      line-height: 1.1;
      margin: 2.5rem 0;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--very-dark-blue);
  .footer__container {
    width: 80%;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;

    .logo_box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .footer__logo {
        width: 10rem;
      }
      .icons {
        display: flex;
        justify-content: space-between;
        & > img {
          width: 1.5rem;
          cursor: pointer;
          &:hover {
            filter: invert(40%) sepia(22%) saturate(4454%) hue-rotate(347deg)
              brightness(99%) contrast(99%);
          }
        }
      }
    }
    .navs {
      color: var(--very-light-gray);
      font-weight: 400;
      & > p {
        margin-bottom: 1rem;
        transition: all 0.3s;
        cursor: pointer;
        &:last-child {
          margin-bottom: 0;
        }
        &:hover {
          color: var(--bright-red);
        }
      }
    }
    .input_box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .form {
        display: flex;
        input {
          flex: 1;
          margin-right: 0.5rem;
          padding: 0.8rem 1rem;
          border-radius: 2rem;
          outline: 0;
        }
        .button-submit {
          color: var(--very-light-gray);
          background-color: var(--bright-red);
          padding: 0.8rem 1.3rem;
          border-radius: 2rem;
          border: none;
          outline: 0;
          transition: opacity 0.3s;
          cursor: pointer;
          &:hover {
            opacity: 0.85;
          }
        }
      }
      .copylight {
        font-weight: 400;
        color: var(--very-light-gray);
      }
    }
  }
`;
