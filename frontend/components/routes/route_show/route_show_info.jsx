import React from 'react';
import RouteShow from './route_show';

const RouteShowInfo = ({ route }) => {

  return (
    <div className="area-show-main-info">
      <h2>Description</h2>
      <p>{route.description}</p>
      <h2>Location</h2>
      <p>{route.location}</p>
      <h2>Protection</h2>
      <p>{route.protection}</p>
    </div>
  )
};

export default RouteShowInfo;