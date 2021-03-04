import React, { useState } from 'react';
import { Button } from './styled/Button';
import { Wrapper } from './styled/Header.styled';

const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Wrapper>
      <img className="header__logo" src="./assets/logo.svg" alt="" />
      <div className="header__nav__container desktop">
        <p className="header__nav">Pricing</p>
        <p className="header__nav">Product</p>
        <p className="header__nav">About Us</p>
        <p className="header__nav">Careers</p>
        <p className="header__nav">Community</p>
      </div>
      <Button className="desktop">Get Started</Button>
      <div className="header__nav__container mobile">
        {!modalActive ? (
          <img
            className="icon-hamburger"
            src="./assets/icon-hamburger.svg"
            alt=""
            onClick={() => setModalActive(true)}
          />
        ) : (
          <img
            className="icon-hamburger"
            src="./assets/icon-close.svg"
            alt=""
            onClick={() => setModalActive(false)}
          />
        )}
      </div>
      <div className={`${modalActive ? 'modal active' : 'modal'}`}>
        <p className="modal__nav">Pricing</p>
        <p className="modal__nav">Product</p>
        <p className="modal__nav">About Us</p>
        <p className="modal__nav">Careers</p>
        <p className="modal__nav">Community</p>
      </div>
    </Wrapper>
  );
};

export default Header;
