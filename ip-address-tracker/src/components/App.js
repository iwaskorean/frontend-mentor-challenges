import React, { useEffect, useState } from 'react';
import Header from './Header';
import Results from './Results';
import ipify from '../apis/ipify';

import '../scss/main.scss';

const App = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    getAddress();
  }, []);

  const getAddress = async () => {
    await ipify
      .get()
      .then((response) => {
        setAddress(response.data.ip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="wrapper">
      <Header address={address} setAddress={setAddress} />
      <Results address={address} />
    </div>
  );
};

export default App;
