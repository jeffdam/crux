import React from 'react';
import { Link } from 'react-router-dom';

const RouteShowHeader = ({ route, areaPath}) => {
  
  const areaPathLinks = areaPath.map(area => (
    <li key={area.id}>&nbsp;>&nbsp;<Link to={`/areas/${area.id}`}>{area.name}</Link></li>
  ))

  const routeSafety = route.safety === "G" ? "" : route.safety;

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
            <h2>{route.grade}</h2>
            
            <h2>{routeSafety}</h2>
          </div> 
        </div>
        <div className="area-show-options">

          <div className="dropdown">
            <div onClick={() => this.handleDropdown('edit')} className="flex-row">
              <a className="area-show-dropdown-button">Improve This Page</a>&nbsp;
                  <img height="6" src={window.images.downArrow} alt="Down Arrow"></img>
            </div>
            <div id="area-show-dropdown-content-edit" className="area-show-dropdown-content">
              <div className="flex-col">
                <a href="#">Suggestion</a>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <div onClick={() => this.handleDropdown('add')} className="flex-row">
              <a className="area-show-dropdown-button">Add to Page</a>&nbsp;
                  <img height="6" src={window.images.downArrow} alt="Down Arrow"></img>
            </div>
            <div id="area-show-dropdown-content-add" className="area-show-dropdown-content">
              <div className="flex-col">
                <a href="#">Add Photo</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default RouteShowHeader;