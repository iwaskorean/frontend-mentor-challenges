import React, { useEffect, useState } from 'react';
import Clock from './Clock';
import Quote from './Quote';
import Detail from './Detail';

// SCSS
import '../scss/main.scss';

const App = () => {
  const [location, setLocation] = useState({
    country: '',
    city: '',
  });
  const [timeData, setTimeData] = useState({});
  const [detailActive, setDetailActive] = useState(false);

  useEffect(() => {
    getGeo();
    getTime();
  }, []);

  const alertMsg =
    'There is something wrong.. Please refresh the page then try again';
  const getGeo = async () => {
    return await (await fetch('https://freegeoip.app/json/'))
      .json()
      .then((response) => {
        setLocation({ country: response.country_name, city: response.city });
      })
      .catch((err) => {
        console.log(err);
        alert(alertMsg);
      });
  };

  const getTime = async () => {
    return await (await fetch('https://worldtimeapi.org/api/ip'))
      .json()
      .then((response) => setTimeData(response))
      .catch((err) => {
        console.log(err);
        alert(alertMsg);
      });
  };

  return (
    <>
      <div className={`${detailActive ? 'wrapper active' : 'wrapper'}`}>
        <Quote detailActive={detailActive} alertMsg={alertMsg} />
        <Clock
          location={location}
          timeData={timeData}
          detailActive={detailActive}
          setDetailActive={setDetailActive}
        />
        <Detail detailActive={detailActive} timeData={timeData} />
      </div>
    </>
  );
};

export default App;
