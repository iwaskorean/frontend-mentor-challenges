import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

import '../index.scss';

const App = () => {
    const logoSrc = './images/logo.svg';

    return (
        <div className="wrapper">
            <Header logoSrc={logoSrc} alt="LOGO"/>
            <Section alt="img_error"/>
            <Footer logoSrc={logoSrc}/>
        </div>
    );
};

export default App;