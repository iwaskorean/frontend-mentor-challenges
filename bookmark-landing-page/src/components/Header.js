import React from 'react';

const Header = () => {
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
    </div>
  );
};

export default Header;
