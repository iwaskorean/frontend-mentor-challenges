import React from 'react';

const Detail = ({ detailActive, timeData }) => {
  return (
    <div className={`${detailActive ? 'detail active' : 'detail'}`}>
      <div className="detail__contents">
        <p className="detail__contents__heading">Current Timezone</p>
        <p className="detail__contents__text">{timeData.timezone}</p>
      </div>
      <div className="detail__contents">
        <p className="detail__contents__heading">Day Of The Year</p>
        <p className="detail__contents__text">{timeData.day_of_year}</p>
      </div>
      <div className="detail__contents">
        <p className="detail__contents__heading">Day Of The Week</p>
        <p className="detail__contents__text">{timeData.day_of_week}</p>
      </div>
      <div className="detail__contents">
        <p className="detail__contents__heading">Week Number</p>
        <p className="detail__contents__text">{timeData.week_number}</p>
      </div>
    </div>
  );
};

export default Detail;
