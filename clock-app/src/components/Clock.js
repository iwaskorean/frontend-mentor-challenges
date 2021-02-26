import React from 'react';
import ButtonMore from './ButtonMore';

const Clock = ({ location, timeData, setDetailActive, detailActive }) => {
  const renderedTime = () => {
    if (timeData.datetime) {
      const hour = timeData.datetime.substr(11, 2);
      const minute = timeData.datetime.substr(14, 2);
      let daypart = '';
      if (hour < 6) {
        daypart = 'night';
      } else if (hour >= 6 && hour < 12) {
        daypart = 'morning';
      } else if (hour >= 12 && hour < 18) {
        daypart = 'day';
      } else {
        daypart = 'evening';
      }

      const daypartIcon =
        daypart === 'night' || daypart === 'evening' ? 'moon' : 'sun';

      return (
        <div className="layout">
          <div className="clock">
            <div className="clock__header">
              <img
                className="clock__header__icon"
                src={`./assets/icon-${daypartIcon}.svg`}
                alt=""
              />
              <p className="clock__header__text">
                Good {daypart}, It's Currently
              </p>
            </div>
            <div className="clock__time">
              <p className="clock__time__time">
                {hour}:{minute}
              </p>
              <p className="clock__time__abbr">{timeData.abbreviation}</p>
            </div>
            <p className="clock__location">
              in {location.city}, {location.country}
            </p>
          </div>
          <ButtonMore
            detailActive={detailActive}
            setDetailActive={setDetailActive}
          />
        </div>
      );
    }
  };

  return <>{renderedTime()}</>;
};

export default Clock;
