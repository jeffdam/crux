import React from 'react';
import queryString from 'query-string';
import RouteFinderResults from './route_finder_results';

class RouteFinder extends React.Component {
  componentDidMount() {
  }

  render() {
    const { routes, areas } = this.props;    
    const sortBy = queryString.parse(this.props.location.search).sort_by;
    return (
      <section className="main-width main-padding">
        <h1>Climbing Route Finder</h1>
        <RouteFinderResults 
          areas={areas}
          routes={routes}
          sortBy={sortBy}
        />
      </section >
    )
  }
} 

export default RouteFinder;