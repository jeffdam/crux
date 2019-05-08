import React from 'react';
import { Link } from 'react-router-dom';

const AreaShowSidebar = ({ subAreaIds, subAreas, routeIds, routes, areaName, areaId, handleAddSubArea}) => {
  
  let titleText;
  let subInfo;
  
  if (subAreaIds.length === 0 && routeIds.length === 0) {
    titleText = "Add an Area or Route";
    subInfo = (
      <>
        <p>This area is empty. Areas can contain sub-areas or routes, <strong>but not both</strong>.</p>
        <p>Before adding a route, consider if you should first add a sub-area (or several) to this area.</p> 
        <Link to={`/add/climb-area/${areaId}`} onClick={handleAddSubArea}>Add Sub-Area</Link> · <Link to={`/add/climb-area/${areaId}`}>Add Route</Link> 
      </>
    )
  } else if (subAreaIds.length > 0) {
    titleText = `Areas in ${areaName}`;
    subInfo = subAreaIds.map((subAreaId) => (
      <li key={subAreaId} className="flex-row"><Link to={`/areas/${subAreaId}`}>{subAreas[subAreaId].name}</Link><div className="area-count">{subAreas[subAreaId].routeCount}</div></li>
    ));
  } else {
    titleText = `Routes in ${areaName}`;
    subInfo = routeIds.map((routeId) => {
      let route = routes[routeId]
      let type = route.routeType === "Sport" ? "S" : route.routeType === "Trad" ? "T" : "";
      let safety = route.safety === "G" ? "" : route.safety;
      return (
        <li key={routeId}><Link to={`/routes/${routeId}`}>{route.name}</Link> {`${type} ${route.grade} ${safety}`}</li>
      )
    });   
  }

  return (
    <>
      <h3>{ titleText }</h3>
      <ul>
        { subInfo }
      </ul>
    </>
  )
}

export default AreaShowSidebar;