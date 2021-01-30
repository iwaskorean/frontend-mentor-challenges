import React from 'react';

const Header = ({ logoSrc, alt }) => {
    return (
        <header> 
            <div className="header__box-left">
                <img className="image-logo" src={logoSrc} alt={alt} />
                <div className="header__nav">Features</div>
                <div className="header__nav">Pricing</div>
                <div className="header__nav">Resources</div>
            </div>
            <div className="header__box-right">
                <div className="header__nav">Login</div>
                <button className="button-cyan">Sign Up</button>
            </div>
        </header>
    );
};

export default Header;