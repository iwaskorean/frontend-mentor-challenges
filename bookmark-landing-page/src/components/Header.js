import React, { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="header">
      <img
        className="header__logo"
        src="./images/logo-bookmark.svg"
        alt="bookmark_logo"
      />
      <div className="header__container">
        <div className="header__nav">Features</div>
        <div className="header__nav">Pricing</div>
        <div className="header__nav">Contact</div>
        <div className="header__nav login">Login</div>
      </div>
      <div className="button-hamburger" onClick={() => setActive(true)}>
        ☰
      </div>
      <div className={active ? 'modal__menu active' : 'modal__menu'}>
        <div className="modal__header">
          <img
            className="logo-modal"
            src="./images/logo-bookmark-white.svg"
            alt="close"
          />
          <img
            className="icon-close"
            src="./images/icon-close.svg"
            alt="close"
            onClick={() => setActive(false)}
          />
        </div>
        <div className="modal__nav">Features</div>
        <div className="modal__nav">Pricing</div>
        <div className="modal__nav contact">Contact</div>
        <div className="modal__nav login">Login</div>
      </div>
    </div>
  );
};

export default Header;
