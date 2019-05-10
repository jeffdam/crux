import React from 'react';

import queryString from 'query-string';
import RouteFinderForm from './route_finder_form';
import RouteFinderResults from './route_finder_results';

class RouteFinder extends React.Component {
  
  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const { routes, areas } = this.props;

    if (routes.length === 0) return null;

    
    let searchParams = queryString.parse(this.props.location.search);
    if (!searchParams.pitches) {
      searchParams = {
        location: "all",
        is_b: "Boulder",
        is_t: "Trad",
        is_s: "Sport",
        is_tr: false,
        r_grade_min: "5.0",
        r_grade_max: "5.16",
        b_grade_min: "VB",
        b_grade_max: "V17+",
        pitches: 1,
        sort_by: "name"
      };
    }
    
    return (
      <section className="main-width main-padding">
        <h1>Climbing Route Finder</h1>
        <RouteFinderForm />
        <RouteFinderResults 
          areas={areas}
          routes={routes}
          searchParams={searchParams}
        />
      </section >
    )
  }
} 

export default RouteFinder;