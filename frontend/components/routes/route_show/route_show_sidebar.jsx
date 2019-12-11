import React from 'react';
import { Link } from 'react-router-dom';
import { getGrade } from '../../../util/route_info_util';

const RouteShowSidebar = ({ neighborRouteIds, routes, areaName, routeId }) => {

  const titleText = `Routes in ${areaName}`;
  const subInfo = neighborRouteIds.map((neighborRouteId) => {
    const route = routes[neighborRouteId];
    const type = route.routeType === "Sport" ? "S" : route.routeType === "Trad" ? "T" : "";
    const typeWithToprope = route.toprope === true && !(type === "") ? `${type},TR` : route.toprope === true ? "TR" : type;
    const safety = route.safety === "G" ? "" : route.safety;
    const grade = getGrade(route.ropeGrade, route.boulderGrade);
    if (neighborRouteId === parseInt(routeId)) {
      return (
        <li key={neighborRouteId} className="flex-row"><div className="route-show-sidebar-current">{route.name}</div>&nbsp;{`${typeWithToprope} ${grade} ${safety}`}</li>
      )
    } else {
      return ( 
        <li key={neighborRouteId}><Link to={`/routes/${neighborRouteId}`}>{route.name}</Link> {`${typeWithToprope} ${grade} ${safety}`}</li>
      )
    } 
  })

  return (
    <article className="area-show-sidebar">
      <h3>{titleText}</h3>
      <ul>
        {subInfo}
      </ul>
    </article>
  )
}

export default RouteShowSidebar;