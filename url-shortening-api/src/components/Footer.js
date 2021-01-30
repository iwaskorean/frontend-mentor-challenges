import React from 'react';

const Footer = ({ logoSrc ,alt }) => {
    return (
        <footer className="footer">
            <div className="footer__boost">
                <div className="footer__boost-heading">
                    Boost your links today
                </div>
                <button className="button-cyan">
                    Get Started
                </button>
            </div>
            <div className="footer__main">
                <div className="logo-box">
                    <img className="logo" src={logoSrc} alt={alt} />
                </div>
                              
                <div className="nav">
                    <div className="nav-heading">Features</div>
                    <div className="nav-text">Link Shortening</div>
                    <div className="nav-text">Branded Links</div>
                    <div className="nav-text">Analytics</div>
                </div>
                <div className="nav">
                    <div className="nav-heading">Resources</div>
                    <div className="nav-text">Blog</div>
                    <div className="nav-text">Developers</div>
                    <div className="nav-text">Support</div>
                </div>
                <div className="nav">
                <div className="nav-heading">Company</div>
                    <div className="nav-text">About</div>
                    <div className="nav-text">Our Team</div>
                    <div className="nav-text">Careers</div>
                    <div className="nav-text">Contact</div>
                </div>
                <div className="icons">
                    <i className="fab fa-github fa-2x"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer;