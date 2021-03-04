import React from 'react';
import { Wrapper } from './styled/Cards.styled';
import { Button } from './styled/Button';
import { HeadingMedium } from './styled/Heading';

const Cards = ({ cardContents }) => {
  return (
    <Wrapper>
      <HeadingMedium>What they’ve said</HeadingMedium>
      <div className="cards__container">
        {cardContents.map((content) => (
          <div className="cards__card card" key={content.id}>
            <img className="avatar" src={content.avatar} alt="" />
            <p className="name">{content.name}</p>
            <p className="text">{content.text}</p>
          </div>
        ))}
      </div>
      <Button>Get Started</Button>
    </Wrapper>
  );
};

export default Cards;
