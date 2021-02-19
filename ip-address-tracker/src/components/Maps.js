import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Maps = ({ result }) => {
  const KEY =
    'pk.eyJ1IjoiaGFuLWtvciIsImEiOiJja2xjOGMxdmowbjJ0Mm9wMGc5NTNxZjNvIn0.aiUatewh0jNs4_KT87lGxA';

  const renderedMap = () => {
    if (result) {
      const viewport = {
        latitude: result.location.lat,
        longitude: result.location.lng,
        width: '100vw',
        height: '70vh',
        zoom: 12,
      };
      return (
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={KEY}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          // onViewportChange={(viewport) => {
          //   setViewport(viewport);
          // }}
        >
          {viewport && (
            <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
              <div className="marker temporary-marker"></div>
            </Marker>
          )}
        </ReactMapGL>
      );
    } else {
      return <h1 className="loading-map"> loading ...</h1>;
    }
  };

  return <div className="map">{renderedMap()}</div>;
};

export default Maps;
