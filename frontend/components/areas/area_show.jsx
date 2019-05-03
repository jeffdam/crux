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

  handleDropdown() {
    document.getElementById("area-show-dropdown-content").classList.toggle("dropdown-content-show");
  }

  render(){
    const { area } = this.props;
    if (!area) return null;
    if (!area.latitude) return null;
    const sortedSubAreas = area.sub_areas.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? 1 : -1);

    const subAreas = sortedSubAreas.map((subArea,idx) => (
      <Link key={idx} to={`/areas/${subArea.id}`}>
        <li >{subArea.name}</li>
      </Link>
    ));

    const elevation = Math.floor(Math.random()*10000)
    const pageViewsMonth = Math.floor(Math.random()*(4**((Math.floor(Math.random()*10)+1))))
    const pageViewsTotal = pageViewsMonth * ((Math.floor(Math.random()*10)+1)*(Math.floor(Math.random()*100)+1))
    
    const parentName = area.parent_id ? <li>&nbsp;>&nbsp;<Link to={`/areas/${area.parent_id}`}>{area.parentName}</Link></li> : "";

    return (
      <section className="area-show-page main-width main-padding">
        <article className="area-show-sidebar">
          <h3>Areas in {area.name}</h3>
          {subAreas}
        </article>

        <article className="area-show-main-content">

          <ul className="area-show-header-path-link">
            <li><Link to="/">All Locations</Link></li>
            {parentName}
          </ul>

          <div className="area-show-header">
            <h1>{area.name} Climbing</h1>
            <div className="dropdown">
              <div onClick={this.handleDropdown} className="flex-row">
                <a className="area-show-dropdown-button">Add to Page</a>&nbsp;
                <img height="6" src={window.images.downArrow} alt="Down Arrow"></img>
              </div>
              <div id="area-show-dropdown-content" className="area-show-dropdown-content">
                <Link className="area-show-dropdown-content-item" to={`/add/climb-area/${area.id}`}>Add Sub-Area</Link>
              </div>
            </div>
          </div>

          <div className="area-show-attributes">
            <ul className="area-show-attribute">
              <li className="area-show-attribute-left">Elevation:</li>
              <li>{elevation} ft</li>
            </ul>
            <ul className="area-show-attribute">
              <li className="area-show-attribute-left">GPS:</li>
              <li>{`${area.latitude.toFixed(3)}, ${area.longitude.toFixed(3)}`} · <a target="_blank" href={`http://maps.google.com/maps?q=${area.latitude},${area.longitude}&t=h&hl=en`}>Google Map</a></li>
            </ul>
            <ul className="area-show-attribute">
              <li className="area-show-attribute-left">Page Views:</li>
              <li>{pageViewsTotal.toLocaleString('en')} total · {pageViewsMonth.toLocaleString('en')}/month</li>
            </ul>
          </div>

          <div className="area-show-main-info">
            <h2>Description</h2>
            <p>{area.description}</p>
            <h2>Getting There</h2>
            <p>{area.getting_there}</p>
          </div>
        </article>
      </section>
    )
  }
}

window.onclick = (event) => {
  if (!event.target.classList.contains('area-show-dropdown-button')) {
    const dropdowns = document.getElementsByClassName("area-show-dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown-content-show')) {
        openDropdown.classList.remove('dropdown-content-show');
      }
    }
  }
}

export default AreaShow;