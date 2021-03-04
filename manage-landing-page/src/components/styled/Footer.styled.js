import styled from 'styled-components';
import simplifyBgImg from '../assets/bg-simplify-section-desktop.svg';

export const SimplifyWrapper = styled.div`
  width: 100%;
  background: no-repeat url(${simplifyBgImg});
  background-size: cover;
  background-color: var(--bright-red);
  margin-top: 4rem;
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
  @media (max-width: 768px) {
    .simplify__container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 1rem;
      padding-bottom: 4rem;
      .simplify__heading {
        width: 80%;
      }
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
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
    .logo_box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 768px) {
        width: 100%;
        justify-content: space-center;
        align-items: center;
        margin: 2rem 0;
        order: 1;
        .icons {
          order: -1;
          margin: 2rem 0;
          margin-bottom: 4rem;
          justify-content: space-between;
          width: 100%;
          & > img {
            margin: 1rem 2rem;
          }
        }
      }
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
      @media (max-width: 768px) {
        text-align: center;
      }
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
      @media (max-width: 768px) {
        order: -1;
        width: 100%;
        margin: 4rem 0;
        .copylight {
          display: none;
        }
      }
      .form {
        display: flex;
        .input {
          flex: 1;
          margin-right: 0.5rem;
          padding: 0.8rem 1rem;
          border-radius: 2rem;
          outline: 0;
          border: none;
          &.active {
            border: 2px solid red;
            color: red;
          }
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
        .message {
          position: absolute;
          margin-top: 3.5rem;
          margin-left: 0.5rem;
          font-style: italic;
          font-size: 0.7rem;
          &.alert {
            color: red;
          }
          &.primary {
            color: skyblue;
          }
        }
      }
      .copylight {
        font-weight: 400;
        font-size: 0.8rem;
        color: var(--very-light-gray);
      }
    }
  }
`;
