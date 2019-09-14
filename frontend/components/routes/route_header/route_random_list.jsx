import React from 'react';
import { Link } from 'react-router-dom';
import RouteShowAttributes from './route_show_attributes';
import RouteShowSidebar from './route_show_sidebar';
import RouteShowHeader from './route_show_header';
import RouteShowInfo from './route_show_info';
import AreaShowPhotos from '../../areas/area_show_photos';
import AreaShowSlideshow from '../../areas/area_show_slideshow';

class RouteRandomList extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddPhotosModal = this.handleAddPhotosModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoute(this.props.match.params.routeId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.routeId !== this.props.match.params.routeId) {
      this.props.fetchRoute(this.props.match.params.routeId);
    }
  }

  handleDropdown(type) {
    document.getElementById(`area-show-dropdown-content-${type}`).classList.toggle("dropdown-content-show");
  }

  handleAddPhotosModal(e) {
    e.preventDefault();
    this.props.openModal({ action: "addPhotos", id: this.props.match.params.routeId });
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
          <RouteShowHeader areaPath={areaPath} route={route} handleDropdown={(type) => this.handleDropdown(type)} handleAddPhotosModal={this.handleAddPhotosModal} currentUser={currentUser} />
          <div className="attr-slides flex-row">
            <RouteShowAttributes route={route} author={author} />
            <AreaShowSlideshow photos={route.photoUrls} />
          </div>
          <RouteShowInfo route={route} />
          <AreaShowPhotos photos={route.photoUrls} handleAddPhotosModal={this.handleAddPhotosModal} />
        </article>
      </section>
    )
  }
}


export default RouteRandomList;