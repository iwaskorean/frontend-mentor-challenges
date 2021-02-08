import React from 'react';
import ReactCardFlip from 'react-card-flip';

const Minutes = ({ minutes, cardName, minFlipped }) => {
  return (
    <div className="item">
      <div className="card-box">
        <div className="card">
          <div className="count">{minutes < 10 ? `0${minutes}` : minutes}</div>
          <ReactCardFlip
            isFlipped={minFlipped}
            containerStyle={{
              position: 'absolute',
            }}
            flipDirection="vertical"
            flipSpeedFrontToBack={0.5}
            flipSpeedBackToFront={0.5}
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

export default Minutes;
