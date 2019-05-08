import React from 'react';
import { Link } from 'react-router-dom';

const RouteShowSidebar = ({ neighborRouteIds, routes, areaName, routeId }) => {

  const titleText = `Routes in ${areaName}`;
  const subInfo = neighborRouteIds.map((neighborRouteId) => {
    let route = routes[neighborRouteId];
    let type = route.routeType === "Sport" ? "S" : route.routeType === "Trad" ? "T" : "";
    let typeWithToprope = route.toprope === true && !(type === "") ? `${type},TR` : route.toprope === true ? "TR" : type;
    let safety = route.safety === "G" ? "" : route.safety;

    if (neighborRouteId === parseInt(routeId)) {
      return (
        <li key={neighborRouteId} className="flex-row"><div className="route-show-sidebar-current">{route.name}</div>&nbsp;{`${typeWithToprope} ${route.grade} ${safety}`}</li>
      )
    } else {
      return (
        <li key={neighborRouteId}><Link to={`/routes/${neighborRouteId}`}>{route.name}</Link> {`${typeWithToprope} ${route.grade} ${safety}`}</li>
      )
    } 
  })

  return (
    <>
      <h3>{titleText}</h3>
      <ul>
        {subInfo}
      </ul>
    </>
  )
}

export default RouteShowSidebar;