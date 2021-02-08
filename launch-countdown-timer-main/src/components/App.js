import React from 'react';
import '../index.scss';
import Countdown from './Countdown';

const App = () => {
  return (
    <div className="wrapper">
      <div className="heading">We're launching soon</div>
      <div className="container">
        <Countdown />
      </div>
      <footer>
        <a href="https://github.com/SewookHan/Frontend-Mentor-Intermediate-Challenges/tree/main/launch-countdown-timer-main">
          <img
            className="icon"
            src="./images/icon-facebook.svg"
            alt="icon"
          ></img>
          <img
            className="icon"
            src="./images/icon-pinterest.svg"
            alt="icon"
          ></img>
          <img
            className="icon"
            src="./images/icon-instagram.svg"
            alt="icon"
          ></img>
        </a>
      </footer>
    </div>
  );
};

export default App;
