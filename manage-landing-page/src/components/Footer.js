import React from 'react';
import { Button } from './styled/Button';
import { SimplifyWrapper, Wrapper } from './styled/Footer.styled';

const Simplify = () => {
  return (
    <SimplifyWrapper>
      <div className="simplify__container">
        <div className="simplify__heading">
          Simplify how your team works today.
        </div>
        <Button primary>Get Started</Button>
      </div>
    </SimplifyWrapper>
  );
};

const Footer = () => {
  return (
    <>
      <Simplify></Simplify>
      <Wrapper>
        <div className="footer__container">
          <div className="logo_box">
            <img
              className="footer__logo"
              src="./assets/logo-white.svg"
              alt=""
            />
            <div className="icons">
              <img className="icon" src="./assets/icon-facebook.svg" alt="" />
              <img className="icon" src="./assets/icon-youtube.svg" alt="" />
              <img className="icon" src="./assets/icon-twitter.svg" alt="" />
              <img className="icon" src="./assets/icon-pinterest.svg" alt="" />
              <img className="icon" src="./assets/icon-instagram.svg" alt="" />
            </div>
          </div>
          <div className="navs">
            <p>Home</p>
            <p>Pricing</p>
            <p>Products</p>
            <p>About Us</p>
          </div>
          <div className="navs">
            <p>Careers</p>
            <p>Community</p>
            <p>Privacy Policy</p>
          </div>
          <div className="input_box">
            <div className="form">
              <input placeholder="Updates in your inbox"></input>
              <button className="button-submit">Go</button>
            </div>
            <p className="copylight">Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
