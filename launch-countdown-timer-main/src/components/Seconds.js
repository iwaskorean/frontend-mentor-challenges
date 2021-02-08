import React from 'react';
import ReactCardFlip from 'react-card-flip';

const Seconds = ({ seconds, cardName, secFlipped }) => {
  return (
    <div className="item">
      <div className="card-box">
        <div className="card">
          <div className="count">{seconds < 10 ? `0${seconds}` : seconds}</div>
          <ReactCardFlip
            isFlipped={secFlipped}
            containerStyle={{
              position: 'absolute',
            }}
            flipDirection="vertical"
            flipSpeedFrontToBack={0.35}
            flipSpeedBackToFront={0.35}
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

export default Seconds;
