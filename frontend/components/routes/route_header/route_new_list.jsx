import React from 'react';
import { Link } from 'react-router-dom';

const RouteNewList = (props) => {
  const { routes } = props;
  const routeLinks = Object.values(routes).map((route, idx) => {
    return (
      <li key={idx}>
        <ul className="new-routes-list-info">
          <li title={route.name}>
            <Link to={`/routes/${route.id}`}>{route.name}</Link>
          </li>
          <li title={route.area.name}>
            <Link to={`/areas/${route.area.id}`}>{route.area.name}</Link>
          </li>
          <li>
            {route.grade}
          </li>
          <li>
            {route.routeType}
          </li>
        </ul>
      </li>
    )
  })

  return (

    <section className="new-routes-list-main">
      <h3>Recently Added Routes</h3>
      <ul className="new-routes-list">
        <li>
          <ul className="new-routes-list-info">
            <li><h4>Name</h4></li>
            <li><h4>Area</h4></li>
            <li><h4>Grade</h4></li>
            <li><h4>Type</h4></li>
          </ul>
        </li>
        {routeLinks}
      </ul>
    </section>
  )
}

export default RouteNewList;