import React, { useEffect, useState } from 'react';
import geo from '../apis/geo';

const Results = ({ address }) => {
  const [location, setLocation] = useState({});
  const [isp, setIsp] = useState('');

  useEffect(() => {
    setLocation({});
    setIsp('');
    getGeo(address);
  }, [address]);

  const getGeo = async (address) => {
    await geo
      .get('/ipAddress', {
        params: {
          ipAddress: address,
        },
      })
      .then((response) => {
        setLocation(response.data.location);
        setIsp(response.data.isp);
      })
      .catch((err) => {
        console.log(err);
        alert('It might be a invalid IP address or Domain, Plese try again');
      });
  };

  const loadingEl = <div className="loading">loading ...</div>;

  return (
    <div className="contents">
      <div className="results">
        <div className="result">
          <div className="heading">IP Address</div>
          <div className="text">{address ? address : loadingEl}</div>
        </div>
        <div className="result">
          <div className="heading">location</div>
          <div className="text">
            {location.city && location.region
              ? `${location.city}, ${location.region}`
              : loadingEl}
          </div>
        </div>
        <div className="result">
          <div className="heading">Time zone</div>
          <div className="text">
            {location.timezone && location.country
              ? `${location.country} ${location.timezone}`
              : loadingEl}
          </div>
        </div>
        <div className="result">
          <div className="heading">ISP</div>
          <div className="text">{isp ? isp : loadingEl}</div>
        </div>
      </div>
    </div>
  );
};

export default Results;
