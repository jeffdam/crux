import React from 'react';
import { Link } from 'react-router-dom';

class RouteFinder extends React.Component {
  
  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const { routes } = this.props;

    if (routes === []) return null;


    const routesList = routes.map(route => {
      const areaPathLinks = route.areaPath.map(area => (
        <li key={area.id}>&nbsp;>&nbsp;<Link to={`/areas/${area.id}`}>{area.name}</Link></li>
      ));

      return (
        <ul className="flex-row">
          <li><Link to={`/routes/${route.id}`}>{route.name}</Link></li>
          <li>
            <ul className="flex-row">
              {areaPathLinks}
            </ul>
          </li>
          <li>{route.grade}{` ${route.safety}`}</li>
          <li>{route.routeType}</li>
          <li>{route.pitches}</li>
        </ul>
      )
    });


    return (
      <section>
        <h1>Climbing Route Finder</h1>
        <div>
          {routesList}
        </div>
      </section >
    )

  }

} 

export default RouteFinder;