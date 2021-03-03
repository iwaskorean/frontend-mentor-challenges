import React from 'react';
import { Button } from './styled/Button';
import { Wrapper } from './styled/Header.styled';

const Header = () => {
  return (
    <Wrapper>
      <img className="header__logo" src="./assets/logo.svg" alt="" />
      <div className="header__nav__container">
        <p className="header__nav">Pricing</p>
        <p className="header__nav">Product</p>
        <p className="header__nav">About Us</p>
        <p className="header__nav">Careers</p>
        <p className="header__nav">Community</p>
      </div>
      <Button>Get Started</Button>
    </Wrapper>
  );
};

export default Header;
