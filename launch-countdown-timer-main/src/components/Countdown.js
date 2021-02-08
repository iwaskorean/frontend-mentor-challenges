import React, { useEffect, useReducer } from 'react';
import Days from './Days';
import Hours from './Hours';
import Seconds from './Seconds';
import Minutes from './Minutes';

const initialState = {
  days: 8,
  hours: 23,
  minutes: 55,
  seconds: 21,
  dayFlipped: true,
  houFlipped: true,
  minFlipped: true,
  secFlipped: true,
};

const CardList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    days,
    hours,
    minutes,
    seconds,
    dayFlipped,
    houFlipped,
    minFlipped,
    secFlipped,
  } = state;

  useEffect(() => {
    const countdown = setInterval(() => {
      dispatch();
    }, 1000);
    return () => clearInterval(countdown);
  });

  function reducer(state, action) {
    const {
      days,
      hours,
      minutes,
      seconds,
      dayFlipped,
      houFlipped,
      minFlipped,
      secFlipped,
    } = state;
    if (seconds) {
      return { ...state, seconds: seconds - 1, secFlipped: !secFlipped };
    } else if (minutes) {
      return {
        ...state,
        minutes: minutes - 1,
        seconds: 59,
        minFlipped: !minFlipped,
        secFlipped: !secFlipped,
      };
    } else if (hours) {
      return {
        ...state,
        hours: hours - 1,
        minutes: 59,
        houFlipped: !houFlipped,
        minFlipped: !minFlipped,
      };
    } else if (days) {
      return {
        ...state,
        days: days - 1,
        hours: 24,
        houFlipped: !houFlipped,
        dayFlipped: !dayFlipped,
      };
    } else {
      alert('It is time to move on mate!');
      return { ...initialState };
    }
  }

  return (
    <React.Fragment>
      <Days days={days} dayFlipped={dayFlipped} cardName="days" />
      <Hours hours={hours} houFlipped={houFlipped} cardName="hours" />
      <Minutes minutes={minutes} minFlipped={minFlipped} cardName="minutes" />
      <Seconds seconds={seconds} secFlipped={secFlipped} cardName="seconds" />
    </React.Fragment>
  );
};

export default CardList;
