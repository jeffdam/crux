import React from 'react';
import { Link } from 'react-router-dom';

const AreaShowSidebar = ({ subAreaIds, subAreas, routeIds, routes, areaName}) => {
  
  const title = subAreaIds.length > 0 ? "Areas" : "Routes";
  const path = subAreaIds.length > 0 ? "areas" : "routes";
  const dataArray = subAreaIds.length > 0 ? subAreaIds : routeIds;
  const data = subAreaIds.length > 0 ? subAreas : routes;
  const subInfo = dataArray.map((subId) => (
    <Link key={subId} to={`/${path}/${subId}`}><li>{data[subId].name}</li></Link>
  ));

  return (
    <>
      <h3>{title} in {areaName}</h3>
      <ul>
        { subInfo }
      </ul>
    </>
  )
}

export default AreaShowSidebar;