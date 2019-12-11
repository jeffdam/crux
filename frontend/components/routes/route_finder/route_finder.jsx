import React from 'react';
import queryString from 'query-string';
import RouteFinderResults from './route_finder_results';
import RouteFinderFormContainer from './route_finder_form_container';

const RouteFinder = props => {
  const { routes, areas } = props;    
  const sortParams = queryString.parse(props.location.search);
  return (
    <section className="main-width main-padding">
      <h1>Climbing Route Finder</h1>
      <RouteFinderFormContainer />
      <RouteFinderResults 
        areas={areas}
        routes={routes}
        sortParams={sortParams}
      />
    </section >
  )
}

export default RouteFinder;