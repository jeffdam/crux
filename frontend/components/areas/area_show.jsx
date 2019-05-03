import React from 'react';
import { Link } from 'react-router-dom';

class AreaShow extends React.Component {

  componentDidMount() {
    this.props.fetchArea(this.props.match.params.areaId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.areaId !== this.props.match.params.areaId) {
      this.props.fetchArea(this.props.match.params.areaId);
    }
  }

  render(){
    const { area } = this.props;
    if (!area) return null;
    const sortedSubAreas = area.sub_areas.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? 1 : -1);

    const subAreas = sortedSubAreas.map((subArea,idx) => (
      <Link key={idx} to={`/areas/${subArea.id}`}>
        <li >{subArea.name}</li>
      </Link>
    ));

    return (
      <section className="area-show-page">
        <article className="area-show-sidebar">
          <h3>Areas in {area.name}</h3>
          {subAreas}
          <Link to={`/add/climb-area/${area.id}`}>Add Sub-Area</Link>
        </article>
        <article className="area-show-main-content">
          <h1>{area.name} Climbing</h1>
          <div>
            <h2>Description</h2>
            <p>{area.description}</p>
          </div>
          <div>
            <h2>Getting There</h2>
            <p>{area.getting_there}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default AreaShow;