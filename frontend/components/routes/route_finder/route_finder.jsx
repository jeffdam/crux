import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import RouteFinderForm from './route_finder_form';

class RouteFinder extends React.Component {
  
  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const { routes, areas } = this.props;

    if (routes === {}) return null;

    const searchParams = queryString.parse(this.props.location.search);
    
    const filteredResults = routes
      .filter(route => [searchParams.is_t, searchParams.is_s, searchParams.is_b].includes(route.routeType));

    const routesList = filteredResults.map(route => {
      const area = areas[route.areaId];
      return (
        <ul key={route.id} className="route-finder-info flex-row">
          <li><Link to={`/routes/${route.id}`}>{route.name}</Link></li>
          <li><Link to={`/areas/${area.id}`}>{area.name}</Link></li>
          <li>{route.grade}{` ${route.safety}`}</li>
          <li>{route.routeType}</li>
          <li>{route.pitches}</li>
        </ul>
      )
    });


    return (
      <section>
        <h1>Climbing Route Finder</h1>
        <RouteFinderForm />
        <div>
          {routesList}
        </div>
      </section >
    )

  }

} 

export default RouteFinder;