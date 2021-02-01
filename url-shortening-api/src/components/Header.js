import React, { useState } from 'react';

const Header = ({ logoSrc, alt }) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <header>
      {active && (
        <div className="menu">
          <div className="header__nav">Features</div>
          <div className="header__nav">Pricing</div>
          <div className="header__nav">Resources</div>
          <hr />
          <div className="header__nav">Login</div>
          <button className="button-cyan">Sign Up</button>
        </div>
      )}
      <div className="header__box-left">
        <img className="image-logo" src={logoSrc} alt={alt} />
        <div className="header__nav active">Features</div>
        <div className="header__nav active">Pricing</div>
        <div className="header__nav active">Resources</div>
      </div>
      <div className="header__box-right active">
        <div className="header__nav">Login</div>
        <button className="button-cyan">Sign Up</button>
      </div>
      <div
        className={
          active ? `header__box-right hide toggle ` : `header__box-right hide`
        }
        onClick={onClick}
      >
        ☰
      </div>
    </header>
  );
};

export default Header;
