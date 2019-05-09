import React from 'react';
import { Link } from 'react-router-dom';
import AreaShowAttributes from './area_show_attributes';
import AreaShowSidebar from './area_show_sidebar';
import AreaShowPhotos from './area_show_photos';
import AreaShowSlideshow from './area_show_slideshow';

class AreaShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddSubArea = this.handleAddSubArea.bind(this);
    this.handleAddRoute = this.handleAddRoute.bind(this);
    this.handleAddPhotosModal = this.handleAddPhotosModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchArea(this.props.match.params.areaId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.areaId !== this.props.match.params.areaId) {
      this.props.fetchArea(this.props.match.params.areaId);
    }
  }

  handleDropdown(type) {
    document.getElementById(`area-show-dropdown-content-${type}`).classList.toggle("dropdown-content-show");
  }

  handleAddPhotosModal(e) {
    e.preventDefault();
    this.props.openModal({ action: "addPhotos", id: this.props.match.params.areaId });
  }

  handleAddSubArea(e) {
    if (this.props.currentUser) {
      this.props.history.push(`/add/climb-area/${this.props.match.params.areaId}`);
    } else {
      e.preventDefault();
      this.props.openModal({ action: "login", pathOnSuccess: `/add/climb-area/${this.props.match.params.areaId}`});
    }
  }

  handleAddRoute(e) {
    if (this.props.currentUser) {
      this.props.history.push(`/add/climb-route/${this.props.match.params.areaId}`);
    } else {
      e.preventDefault();
      this.props.openModal({ action: "login", pathOnSuccess: `/add/climb-route/${this.props.match.params.areaId}`});
    }
  }

  render(){
    const { area, author, subAreas, routes, parents, currentUser } = this.props;

    if (!area || !area.authorId) return null;

    const parentLinks = area.parents.map(parent => (
      <li key={parent.id}>&nbsp;>&nbsp;<Link  to={`/areas/${parent.id}`}>{parent.name}</Link></li>
    ))
    
    const improvePageLink = this.props.currentUser === area.authorId ? (
      <div className="dropdown">
        <div onClick={() => this.handleDropdown('edit')} className="flex-row">
          <a className="area-show-dropdown-button">Improve This Page</a>&nbsp;
                  <img height="6" src={window.images.downArrow} alt="Down Arrow"></img>
        </div>
        <div id="area-show-dropdown-content-edit" className="area-show-dropdown-content">
          <div className="flex-col show-dropdown-items">
            <Link className="area-show-dropdown-content-item" to={`/areas/${area.id}/edit`}>Edit Area</Link> 
          </div>
        </div>
      </div>
    ) : "";
      // <Link className="area-show-dropdown-content-item" to={`/`}>Suggest Change</Link>;
    
    const addToPageContents = (area.subAreaIds.length === 0 && area.routeIds.length === 0) ? 
        (
          <>
            <Link
              className="area-show-dropdown-content-item"
              to={`/add/climb-area/${area.id}`}
              onClick={this.handleAddSubArea}
            >Add Sub-Area</Link>
            <Link
              className="area-show-dropdown-content-item"
              to={`/add/climb-route/${area.id}`}
              onClick={this.handleAddRoute}
            >Add Route</Link>
          </>
      ) : area.subAreaIds.length > 0 ? (
          <Link
            className="area-show-dropdown-content-item"
            to={`/add/climb-area/${area.id}`}
            onClick={this.handleAddSubArea}
          >Add Sub-Area</Link>
        ) : (
          <Link
            className="area-show-dropdown-content-item"
            to={`/add/climb-route/${area.id}`}
            onClick={this.handleAddRoute}
          >Add Route</Link>
        )


        
    return (
      <section className="area-show-page main-width main-padding">
        
        <AreaShowSidebar 
          subAreas={subAreas} 
          routes={routes} 
          areaName={area.name} 
          routeIds={area.routeIds} 
          subAreaIds={area.subAreaIds} 
          areaId={this.props.match.params.areaId} 
          handleAddSubArea={this.handleAddSubArea}
          handleAddRoute={this.handleAddRoute}
        />
   

        <article className="area-show-main-content">

          <ul className="area-show-header-path-link">
            <li><Link to="/">All Locations</Link></li>
            {parentLinks}
          </ul>

          <div className="area-show-header">
            <h1>{area.name} Climbing</h1>
            <div className="area-show-options">


              {improvePageLink}

              <div className="dropdown">
                <div onClick={() => this.handleDropdown('add')} className="flex-row">
                  <a className="area-show-dropdown-button">Add to Page</a>&nbsp;
                  <img height="6" src={window.images.downArrow} alt="Down Arrow"></img>
                </div>
                <div id="area-show-dropdown-content-add" className="area-show-dropdown-content">
                  <div className="flex-col show-dropdown-items">
                    { addToPageContents }
                    <a href="#" onClick={this.handleAddPhotosModal}>Add Photos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="attr-slides flex-row">
            <AreaShowAttributes area={area} author={author}/>
            <AreaShowSlideshow photos={area.photoUrls}/>
          </div>
          <div className="area-show-main-info">
            <h2>Description</h2>
            <p>{area.description}</p>
            <h2>Getting There</h2>
            <p>{area.gettingThere}</p>
            <AreaShowPhotos photos={area.photoUrls} handleAddPhotosModal={this.handleAddPhotosModal}/>
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