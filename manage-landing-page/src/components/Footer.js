import React, { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const onSubmit = (e) => {
    e.preventDefault();
    if (regExp.test(email)) {
      setAlert(false);
      setSuccess(true);
    } else {
      setAlert(true);
    }
  };

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
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              <input
                className={alert ? 'input active' : 'input'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Updates in your inbox"
              />
              <button className="button-submit">Go</button>
              {alert ? (
                <p className="message alert">Please insert valid email</p>
              ) : (
                success && (
                  <p className="message primary">
                    We sent you an email. Check your inbox
                  </p>
                )
              )}
            </form>
            <p className="copylight">Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
