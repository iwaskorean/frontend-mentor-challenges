import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 5rem 0;

  .about__heading {
    padding-right: 10rem;
  }

  .about__detail {
    margin: 0.5rem 0;
    & > p {
      margin-left: 5rem;
    }
    .about__detail__heading {
      display: flex;
      align-items: center;
      .number-box {
        color: var(--very-light-gray);
        font-weight: 500;
        font-size: 1.1rem;
        background-color: var(--bright-red);
        width: 4rem;
        padding: 0.1rem 0.2rem;
        border-radius: 1rem;
        text-align: center;
        margin-right: 1rem;
      }
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr;
    text-align: center;
    .about__heading {
      padding-right: 0rem;
    }
    .about__detail {
      & > p {
        margin: 1.5rem;
      }
      .about__detail__heading {
        background-color: #ffeade;
        border-radius: 1rem;
        & > p {
          flex: 1;
        }
      }
    }
  }
`;
