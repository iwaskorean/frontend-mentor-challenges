import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [active, setActive] = useState(false);

  const regExp = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!regExp.test(email)) {
      setActive(true);
      return;
    }
    setActive(false);
  };

  return (
    <div className="footer">
      <div className="contact__container">
        <p className="contact__text">35,000+ already joined</p>
        <div className="contact__heading">
          Stay up-to-date with what we’re doing
        </div>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <input
            className={active ? 'input-email active' : 'input-email'}
            placeholder="Enter Your E-mail Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={active ? 'button-contact active' : 'button-contact'}
          >
            Contact Us
          </button>
        </form>
        <div className={active ? 'alert active' : 'alert'}>
          Whoops.. Check your e-mail again
        </div>
      </div>
      <div className="footer__container">
        <div className="footer__navs">
          <img
            className="logo--white"
            src="./images/logo-bookmark-white.svg"
            alt="logo-img"
          />
          <div className="footer_nav">Features</div>
          <div className="footer_nav">Pricing</div>
          <div className="footer_nav">Contact</div>
        </div>
        <a href="https://github.com/SewookHan/Frontend-Mentor-Intermediate-Challenges/tree/main/bookmark-landing-page">
          <img
            className="icon-github"
            src="./images/icon-github-light.png"
            alt="icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
