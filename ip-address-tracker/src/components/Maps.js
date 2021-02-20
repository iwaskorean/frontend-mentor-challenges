import React from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../apis/map';

const Marker = () => (
  <div>
    <img className="marker" src="./images/icon-location.svg" alt="asdf" />
  </div>
);

const Maps = ({ result }) => {
  const renderedMap = () => {
    if (result) {
      const location = {
        lat: result.location.lat,
        lng: result.location.lng,
      };
      return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY, language: 'en' }}
          defaultCenter={location}
          center={location}
          defaultZoom={15}
          options={{
            panControl: false,
            mapTypeControl: false,
            scrollwheel: false,
          }}
        >
          <Marker lat={result.location.lat} lng={result.location.lng} />
        </GoogleMapReact>
      );
    } else {
      return <h1 className="loading-map"> loading ...</h1>;
    }
  };

  return <div className="map">{renderedMap()}</div>;
};

export default Maps;
