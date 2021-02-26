import React, { useEffect, useState } from 'react';
import Clock from './Clock';
import Quote from './Quote';
import Detail from './Detail';
import { Loader } from 'semantic-ui-react';
// SCSS
import '../scss/main.scss';

const App = () => {
  const [location, setLocation] = useState({
    country: '',
    city: '',
  });
  const [timeData, setTimeData] = useState({});
  const [detailActive, setDetailActive] = useState(false);
  const [dayActive, setDayActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGeo();
    getTime();
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      getTime();
    }, 30000);
    return () => clearInterval(time);
  });

  const alertMsg =
    'There is something wrong.. Please refresh the page then try again';

  const getGeo = async () => {
    await (await fetch('https://freegeoip.app/json/'))
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
    await (await fetch('https://worldtimeapi.org/api/ip'))
      .json()
      .then((response) => {
        setTimeData(response);
        if (
          response.datetime.substr(11, 2) >= 6 &&
          response.datetime.substr(11, 2) < 18
        ) {
          setDayActive(true);
        } else {
          setDayActive(false);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert(alertMsg);
      });
  };

  const style = (
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
    />
  );

  return (
    <>
      {loading ? (
        <div className="loading">
          {style}
          <Loader size="huge" active />
        </div>
      ) : (
        <div
          className={`${
            detailActive
              ? `wrapper active ${dayActive && 'day'}`
              : `wrapper ${dayActive && 'day'}`
          }`}
        >
          <Quote detailActive={detailActive} alertMsg={alertMsg} />
          <Clock
            location={location}
            timeData={timeData}
            detailActive={detailActive}
            setDetailActive={setDetailActive}
            setDayActive={setDayActive}
          />
          <Detail
            detailActive={detailActive}
            timeData={timeData}
            dayActive={dayActive}
          />
        </div>
      )}
    </>
  );
};

export default App;
