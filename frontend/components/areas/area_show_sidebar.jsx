import React from 'react';
import { Link } from 'react-router-dom';
import { getGrade } from '../../util/route_info_util';

const AreaShowSidebar = ({ subAreaIds, subAreas, routeIds, routes, areaName, areaId, handleAddSubArea, handleAddRoute}) => {
  
  let titleText;
  let subInfo;
  
  if (subAreaIds.length === 0 && routeIds.length === 0) {
    titleText = "Add an Area or Route";
    subInfo = (
      <>
        <p>This area is empty. Areas can contain sub-areas or routes, but not both.</p>
        <p>Before adding a route, consider if you should first add a sub-area (or several) to this area.</p> 
        <Link to={`/add/climb-area/${areaId}`} onClick={handleAddSubArea}>Add Sub-Area</Link> · <Link to={`/add/climb-route/${areaId}`} onClick={handleAddRoute}>Add Route</Link> 
      </>
    )
  } else if (subAreaIds.length > 0) {
    titleText = `Areas in ${areaName}`;
    subInfo = subAreaIds.map((subAreaId) => (
      <li key={subAreaId} className="flex-row">
      <Link to={`/areas/${subAreaId}`}>{subAreas[subAreaId].name}</Link>
      <div className="area-count">{subAreas[subAreaId].routeCount}</div></li>
    ));
  } else {
    titleText = `Routes in ${areaName}`;
    subInfo = routeIds.map((routeId) => {
      const route = routes[routeId]
      const type = route.routeType === "Sport" ? "S" : route.routeType === "Trad" ? "T" : "";
      const typeWithToprope = route.toprope === true && !(type === "") ? `${type},TR` : route.toprope === true ? "TR" : type;
      const safety = route.safety === "G" ? "" : route.safety;
      const grade = getGrade(route.ropeGrade, route.boulderGrade);
      return (
        <li key={routeId}><Link to={`/routes/${routeId}`}>{route.name}</Link> {`${typeWithToprope} ${grade} ${safety}`}</li>
      )
    });   
  }

  return (
    <article className="area-show-sidebar">
      <h3>{ titleText }</h3>
      <ul>
        { subInfo }
      </ul>
    </article>
  )
}

export default AreaShowSidebar;