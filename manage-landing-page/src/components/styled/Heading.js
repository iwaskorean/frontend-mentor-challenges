import styled from 'styled-components';

export const HeadingLarge = styled.p`
  font-size: 3.5rem;
  color: var(--very-dark-blue);
  font-weight: 700;
  line-height: 1.1;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const HeadingMedium = styled.p`
  font-size: 2.4rem;
  color: var(--very-dark-blue);
  font-weight: 700;
  line-height: 1.1;
`;

export const HeadingSmall = styled.p`
  font-size: 1.2rem;
  color: var(--very-dark-blue);
  font-weight: 700;
  line-height: 1.1;
`;
