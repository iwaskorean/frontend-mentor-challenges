import styled from 'styled-components';

export const Button = styled.button`
  color: ${(props) =>
    props.primary ? 'var(--bright-red)' : 'var(--very-light-gray)'};
  background-color: ${(props) =>
    props.primary ? 'var(--very-light-gray)' : 'var(--bright-red)'};
  outline: 0;
  border-radius: 1.3rem;
  border: none;
  padding: 0.7rem 2rem;
  font-weight: 500;
  box-shadow: ${(props) =>
    props.primary ? 'none' : '0px 5px 8px rgba(180, 180, 180, 0.7)'};
  transition: opacity 0.3s;
  cursor: pointer;
  font-size: 0.9rem;
  max-height: 2.81rem;
  &:hover {
    opacity: 0.85;
  }
`;
