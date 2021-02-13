import React from 'react';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__content">
        <div className="heading__main">A Simple Bookmark Manager </div>
        <div className="description__main">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </div>
        <button className="button-get chrome">Get it on Chrome</button>
        <button className="button-get firefox">Get it on Firefox</button>
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
