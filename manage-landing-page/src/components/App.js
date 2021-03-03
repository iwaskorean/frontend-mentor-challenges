import React from 'react';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';
// styles
import { GlobalStyle, Wrapper } from './styled/App.styled';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Intro />
        <About />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default App;
