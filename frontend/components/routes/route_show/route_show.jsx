import React from 'react';
import { Link } from 'react-router-dom';
// import RouteShowAttributes from './area_show_attributes';
// import RouteShowSidebar from './area_show_sidebar';

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
    const route = routes[this.props.match.params.routeId];
    if (!route || !route.authorId) return null;

    const areaPathLinks = areaPath.map(area => (
      <li key={area.id}>&nbsp;>&nbsp;<Link to={`/areas/${area.id}`}>{area.name}</Link></li>
    ))

    return (
      <section className="area-show-page main-width main-padding">
        {/* <article className="area-show-sidebar">
          <AreaShowSidebar subAreas={subAreas} routes={routes} areaName={area.name} routeIds={area.routeIds} subAreaIds={area.subAreaIds} />
        </article> */}

        <article className="area-show-main-content">

          <ul className="area-show-header-path-link">
            <li><Link to="/">All Locations</Link></li>
            {areaPathLinks}
          </ul>

          <div className="area-show-header">
            <h1>{route.name}</h1>
          </div>

          {/* <AreaShowAttributes area={area} author={author} /> */}

          <div className="area-show-main-info">
            <h2>Description</h2>
            <p>{route.description}</p>
            <h2>Location</h2>
            <p>{route.location}</p>
          </div>
        </article>
      </section>
    )
  }
}


export default RouteShow;