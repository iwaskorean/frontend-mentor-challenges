import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 5rem 0;

  .cards__container {
    overflow-x: scroll;
    display: flex;
    justify-content: flex-start;
    padding: 3rem 0.5rem;
    margin: 3rem;
    &::-webkit-scrollbar {
      height: 1.5rem;
      cursor: pointer;
      border-radius: 20px;
      border: none;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 1);
    }
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(
        to right,
        var(--bright-red) 20%,
        #f3e2e2 100%
      );
      border-radius: 20px;
    }
    &::-webkit-scrollbar-button {
      display: none;
    }
    .cards__card {
      width: 50%;
      min-width: 40vw;
      margin: 0 1rem;
      padding: 2rem 4rem;
      background-color: var(--very-light-gray);
      @media (max-width: 768px) {
        width: 80%;
        min-width: 80vw;
        padding: 2rem 2rem;
        margin: 0 1rem;
      }
      .avatar {
        width: 6rem;
        margin-top: -5rem;
      }
      .name {
        font-weight: 700;
        font-size: 1.2rem;
        margin: 1rem 0;
      }
      .text {
        color: var(--dark-grayish-blue);
      }
    }
  }
`;
