import React from 'react';
import { Link } from 'react-router-dom';

class RouteRandomList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
  }

  render() {
    const { routes } = this.props;
    const routeLinks = Object.values(routes).map((route, idx) => {
      return (
        <li key={idx}>
          <Link to={`/routes/${route.id}`}>{route.name}</Link>
        </li>
      )
    })

    return (

      <section className="">
        <ul>
          {routeLinks}
        </ul>
      </section>
    )
  }
}


export default RouteRandomList;