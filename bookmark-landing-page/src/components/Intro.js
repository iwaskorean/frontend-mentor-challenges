import React from 'react';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__content">
        <div className="heading">A Simple Bookmark Manager </div>
        <div className="description">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </div>
        <button className="button-get">Get it on Chrome</button>
        <button className="button-get">Get it on Firefox</button>
      </div>
      <div className="intro__hero">
        <img
          className="image-hero"
          src="./images/illustration-hero.svg"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Intro;
