import React, { useEffect, useState } from 'react';
import geo from '../apis/geo';
import Maps from './Maps';

const Results = ({ address }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
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
        setResult(response.data);
        setLoading(true);
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
            {loading
              ? `${result.location.city}, ${result.location.region}`
              : loadingEl}
          </div>
        </div>
        <div className="result">
          <div className="heading">Time zone</div>
          <div className="text">
            {loading
              ? `${result.location.country} ${result.location.timezone}`
              : loadingEl}
          </div>
        </div>
        <div className="result">
          <div className="heading">ISP</div>
          <div className="text">{loading ? result.isp : loadingEl}</div>
        </div>
      </div>
      <Maps result={result} />
    </div>
  );
};

export default Results;
