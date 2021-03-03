import React from 'react';
import { HeadingMedium, HeadingSmall } from './styled/Heading';
import { Text } from './styled/Text';
import { Wrapper } from './styled/About.styled';

const contents = [
  {
    idx: '01',
    heading: 'What’s different about Manage?',
    text:
      'Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.',
  },
  {
    idx: '02',
    heading: 'What’s different about Manage?',
    text:
      'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
  },
  {
    idx: '03',
    heading: 'Advanced built-in reports',
    text:
      'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
  },
];

const About = () => {
  return (
    <Wrapper>
      <div className="about__heading">
        <HeadingMedium>What’s different about Manage?</HeadingMedium>
        <Text>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </Text>
      </div>
      <div className="about__details">
        {contents.map((content) => (
          <div className="about__detail" key={content.idx}>
            <div className="about__detail__heading">
              <div className="number-box">{content.idx}</div>
              <HeadingSmall>{content.heading}</HeadingSmall>
            </div>
            <Text>{content.text}</Text>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default About;
