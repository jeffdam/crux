import React from 'react';
import { Link } from 'react-router-dom';
import RouteShowAttributes from './route_show_attributes';
import RouteShowSidebar from './route_show_sidebar';
import RouteShowHeader from './route_show_header';

class RouteShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoute(this.props.match.params.routeId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.routeId !== this.props.match.params.routeId) {
      this.props.fetchRoute(this.props.match.params.routeId);
    }
  }

  render() {
    const { routes, author, areaPath, currentUser } = this.props;
    const routeId = this.props.match.params.routeId
    const route = routes[routeId];
    if (!route || !route.authorId) return null;

    return (
      <section className="area-show-page main-width main-padding">
        <article className="area-show-sidebar">
          <RouteShowSidebar neighborRouteIds={route.neighborRouteIds} routes={routes} areaName={areaPath.slice(-1)[0].name} routeId={routeId} />
        </article>

        <article className="area-show-main-content">

          <RouteShowHeader areaPath={areaPath} route={route}/>

          

          <RouteShowAttributes route={route} author={author} />

          <div className="area-show-main-info">
            <h2>Description</h2>
            <p>{route.description}</p>
            <h2>Location</h2>
            <p>{route.location}</p>
            <h2>Protection</h2>
            <p>{route.protection}</p>
          </div>
        </article>
      </section>
    )
  }
}


export default RouteShow;