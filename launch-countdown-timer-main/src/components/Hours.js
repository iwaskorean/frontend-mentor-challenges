import React from 'react';
import ReactCardFlip from 'react-card-flip';

const Hours = ({ hours, cardName, horFlipped }) => {
  return (
    <div className="item">
      <div className="card-box">
        <div className="card">
          <div className="count">{hours < 10 ? `0${hours}` : hours}</div>
          <ReactCardFlip
            isFlipped={horFlipped}
            containerStyle={{
              position: 'absolute',
            }}
            flipDirection="vertical"
            flipSpeedFrontToBack={0.3}
            flipSpeedBackToFront={0.3}
            infinite={true}
          >
            <div className="card-bottom"></div>
            <div className="card-top"></div>
          </ReactCardFlip>
          <div className="circle circle-left"></div>
          <div className="circle circle-right"></div>
        </div>
      </div>
      <div className="card-name">{cardName}</div>
    </div>
  );
};

export default Hours;
