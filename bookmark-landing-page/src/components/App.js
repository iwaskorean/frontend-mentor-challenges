import React from 'react';
import Header from './Header';
import Intro from './Intro';
import './scss/main.scss';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Intro />
    </div>
  );
};

export default App;
