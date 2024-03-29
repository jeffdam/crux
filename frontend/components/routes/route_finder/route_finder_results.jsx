import React from 'react';
import { Link } from 'react-router-dom';
import { getGrade, sortRouteFinderResults } from '../../../util/route_info_util';

const RouteFinderResults = ({ areas, routes, sortParams }) => {
  const sortedRoutes = sortRouteFinderResults(routes, sortParams);
  const routesList = sortedRoutes.map((route, idx) => {
    const area = areas[route.routeAreaId];
    const tr = route.toprope ? ", TR" : "";
    const safety = route.safety === "G" ? "" : route.safety;
    const grade = getGrade(route.ropeGrade, route.boulderGrade);
    return (
      <ul key={idx} className="route-finder-info flex-row">
        <li className="route-finder-info-name"><Link to={`/routes/${route.id}`}>{route.name}</Link></li>
        <li className="route-finder-info-name"><Link to={`/areas/${route.routeAreaId}`}>{area.name}</Link></li>
        <li className="route-finder-info-attr">{grade}{` ${safety}`}</li>
        <li className="route-finder-info-attr">{route.routeType}{tr}</li>
        <li className="route-finder-info-attr">{route.pitches}</li>
      </ul>
    )
  });
  
  return (
    <div className="route-finder-results">
      <div className="flex-row baseline">
        <h1>Search Results</h1>
        <div>&nbsp;&nbsp;
          {`(${routes.length} results found)`}
        </div>
      </div>
      <ul key="route-finder-table-header" className="route-finder-info flex-row flex-end">
        <li className="route-finder-info-name"><h4>Route Name</h4></li>
        <li className="route-finder-info-name"><h4>Route Area</h4></li>
        <li className="route-finder-info-attr"><h4>Route Grade/Safety</h4></li>
        <li className="route-finder-info-attr"><h4>Type</h4></li>
        <li className="route-finder-info-attr"><h4>Pitches</h4></li>
      </ul>
      {routesList}
    </div>
  )

};

export default RouteFinderResults;