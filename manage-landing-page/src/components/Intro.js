import React from 'react';
import { Button } from './styled/Button';
import { HeadingLarge } from './styled/Heading';
import { Text } from './styled/Text';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 1rem;
  margin: 5rem 0;
  align-items: center;

  .intro__hero {
    justify-self: flex-end;
    .intro__hero__img {
      width: 80%;
      margin-left: 4rem;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr;
    text-align: center;
    .intro__hero {
      justify-self: center;
      order: -1;
      .intro__hero__img {
        margin-left: 0rem;
      }
    }
  }
`;

const Intro = () => {
  return (
    <Wrapper>
      <div className="intro__contents">
        <HeadingLarge>
          Bring everyone together to build better products.
        </HeadingLarge>
        <Text>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </Text>
        <Button>Get Started</Button>
      </div>
      <div className="intro__hero">
        <img
          className="intro__hero__img"
          src="./assets/illustration-intro.svg"
          alt=""
        />
      </div>
    </Wrapper>
  );
};

export default Intro;
