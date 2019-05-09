import React from 'react';

class AreaShowPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.truncateToggle = this.truncateToggle.bind(this);
  }

  truncateToggle() {
    if (this.state.expanded === true) {
      this.setState({ expanded: false });
    } else {
      this.setState({ expanded: true });
    }
  }

  handleDropdown(type) {
    document.getElementById(`area-show-dropdown-content-${type}`).classList.toggle("dropdown-content-show");
  }

  render() {
    const { expanded } = this.state;
    const { photos } = this.props;
    
    let photoUrlArray;
    let toggleButton = "";

    if (photos.length === 0) {
      return null;
    } else if (photos.length <= 8) {
      photoUrlArray = photos;
    } else if (expanded) {
      photoUrlArray = photos;
      toggleButton = <button onClick={this.truncateToggle} className="toggle-button">Show Fewer Photos</button>;
    } else {
      photoUrlArray = photos.slice(0,8);
      toggleButton = <button onClick={this.truncateToggle} className="toggle-button">Show {photos.length-8} More Photos</button>;
    }

    const photosList = photoUrlArray.map((photoUrl, idx) => {
      return (
        <li key={idx} className="show-photos-photo">
          <img src={window.images.photoTemplate} alt="test" />
        </li>
      )
    })

    return (
      <>
        <div className="show-photos-header flex-row">
          
          <h2>Photos</h2>

          <div className="dropdown area-show-options">
            <div onClick={() => this.handleDropdown('addPhoto')} className="flex-row">
              <a className="area-show-dropdown-button">Add New Photo</a>&nbsp;
                <img height="6" src={window.images.downArrow} alt="Down Arrow"></img>
            </div>
            <div id="area-show-dropdown-content-addPhoto" className="area-show-dropdown-content">
              <div className="flex-col">
                <a href="#">Add New Photo</a>
              </div>
            </div>
          </div>
        </div>

        <ul className="show-photos">
          {photosList}
        </ul>

        {toggleButton}
      </>
    );
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

export default AreaShowPhotos;