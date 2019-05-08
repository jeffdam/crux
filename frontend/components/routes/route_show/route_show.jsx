import React from 'react';
import { Link } from 'react-router-dom';
import RouteShowAttributes from './route_show_attributes';
import RouteShowSidebar from './route_show_sidebar';
import RouteShowHeader from './route_show_header';
import RouteShowInfo from './route_show_info';
import AreaShowPhotos from '../../areas/area_show_photos';
import AreaShowSlideshow from '../../areas/area_show_slideshow';

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
        <RouteShowSidebar neighborRouteIds={route.neighborRouteIds} routes={routes} areaName={areaPath.slice(-1)[0].name} routeId={routeId} />
        <article className="area-show-main-content">
          <RouteShowHeader areaPath={areaPath} route={route}/>
          <div className="attr-slides flex-row">
            <RouteShowAttributes route={route} author={author} />
            <AreaShowSlideshow photos={route.photoUrls} />
          </div>
          <RouteShowInfo route={route}/>
          <AreaShowPhotos photos={route.photoUrls}/>
        </article>
      </section>
    )
  }
}


export default RouteShow;