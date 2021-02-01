import React from 'react';
import InputBar from './InputBar';

const Section = ({ alt }) => {
  return (
    <React.Fragment>
      <div className="section__intro">
        <div className="container__typo">
          <div className="title">More than just shorter links</div>
          <div className="text">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </div>
          <button className="button-cyan">Get Started</button>
        </div>
        <div className="container__image">
          <img
            className="image-hero"
            src="./images/illustration-working.svg"
            alt={alt}
          />
        </div>
      </div>
      <div className="section__main">
        <InputBar />
        <div className="title">Advanced Statistics</div>
        <div className="text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </div>
        <div className="container__cards">
          <div className="card">
            <div className="card-icon">
              <img src="./images/icon-brand-recognition.svg" alt={alt}></img>
            </div>
            <div className="title">Brand Recognition</div>
            <div className="text">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src="./images/icon-detailed-records.svg" alt={alt}></img>
            </div>
            <div className="title">Detailed Records</div>
            <div className="text">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src="./images/icon-fully-customizable.svg" alt={alt}></img>
            </div>
            <div className="title">Fully Customizable</div>
            <div className="text">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section;
