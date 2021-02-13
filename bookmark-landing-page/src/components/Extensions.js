import React from 'react';

const Extensions = () => {
  return (
    <div className="extensions">
      <div className="heading__sub--centered">Download the extension</div>
      <div className="description__sub--centered">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </div>
      <div className="extensions__container">
        <div className="card">
          <img
            className="logo"
            src="./images/logo-chrome.svg"
            alt="logo-chrome"
          />
          <div className="title">Add to Chrome</div>
          <div className="version">Minimum version 62</div>
          <button className="button-add">Add & Install Extension</button>
        </div>
        <div className="card">
          <img
            className="logo"
            src="./images/logo-firefox.svg"
            alt="logo-firefox"
          />
          <div className="title">Add to Firefox</div>
          <div className="version">Minimum version 55</div>
          <button className="button-add">Add & Install Extension</button>
        </div>
        <div className="card">
          <img
            className="logo"
            src="./images/logo-opera.svg"
            alt="logo-opera"
          />
          <div className="title">Add to Opera</div>
          <div className="version">Minimum version 46</div>
          <button className="button-add">Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
};

export default Extensions;
