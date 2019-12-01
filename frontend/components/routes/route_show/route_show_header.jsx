import React from 'react';
import { Link } from 'react-router-dom';
import { getGrade } from '../../../util/route_info_util';

const RouteShowHeader = ({ route, areaPath, currentUser, handleDropdown, handleAddPhotosModal}) => {
  
  const areaPathLinks = areaPath.map(area => (
    <li key={area.id}>&nbsp;>&nbsp;<Link to={`/areas/${area.id}`}>{area.name}</Link></li>
  ))

  const routeSafety = route.safety === "G" ? "" : route.safety;
  const grade = getGrade(route.ropeGrade, route.boulderGrade);

  const improvePageLink = currentUser === route.authorId ? (
    <div className="dropdown">
      <div onClick={() => handleDropdown('edit')} className="flex-row">
        <a className="area-show-dropdown-button">Improve This Page</a>&nbsp;
        <img height="6" src={window.images.downArrow} alt="Down Arrow"></img>
      </div>
      <div id="area-show-dropdown-content-edit" className="area-show-dropdown-content">
        <div className="flex-col">
          <Link className="area-show-dropdown-content-item" to={`/routes/${route.id}/edit`}>Edit Route</Link>
        </div>
      </div>
    </div>
  ) : "";



  return (
    <>
      < ul className="area-show-header-path-link" >
        <li><Link to="/">All Locations</Link></li>
        {areaPathLinks}
      </ul >
      <div className="route-show-header">
        <div className="route-show-header-left">
          <h1>{route.name}</h1>
          <div className="route-show-header-left-sub">
            <h2>{grade}</h2>
            &nbsp;
            <h2>{routeSafety}</h2>
          </div> 
        </div>
        <div className="area-show-options">

          { improvePageLink }

          <div className="dropdown">
            <div onClick={() => handleDropdown('add')} className="flex-row">
              <a className="area-show-dropdown-button">Add to Page</a>&nbsp;
                  <img height="6" src={window.images.downArrow} alt="Down Arrow"></img>
            </div>
            <div id="area-show-dropdown-content-add" className="area-show-dropdown-content">
              <div className="flex-col">
                <a href="#" onClick={handleAddPhotosModal}>Add Photos</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

window.onclick = (event) => {
  if (!event.target.classList.contains('area-show-dropdown-button')) {
    const dropdowns = document.getElementsByClassName("area-show-dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown-content-show')) {
        openDropdown.classList.remove('dropdown-content-show');
      }
    }
  }
}

export default RouteShowHeader;