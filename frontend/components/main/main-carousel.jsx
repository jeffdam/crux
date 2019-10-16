import React from 'react';

class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: 0,
      numPhotos: this.props.photos.length
    };

    this.changePhoto = this.changePhoto.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.changePhoto, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changePhoto(nextPhotoIndex = ((this.state.currentPhoto + 1) % this.state.numPhotos)){
    document.getElementById(`dot-${this.state.currentPhoto}`).classList.remove("checked-dot");
    document.getElementById(`dot-${nextPhotoIndex}`).classList.add("checked-dot");
    this.setState({ currentPhoto: nextPhotoIndex });
  }

  selectPhoto(photo){
    clearInterval(this.interval);
    this.changePhoto(photo);
    this.interval = setInterval(this.changePhoto, 5000);
  }

  render() {
    const { photos } = this.props;
    if (photos.length === 0) return null; 

    return (
      <div className="main-carousel">
        <img src={photos[this.state.currentPhoto]} alt="photo" />
        <ul className="carousel-dots">
          <li id="dot-0" onClick={() => this.selectPhoto(0)} className="checked-dot"></li>
          <li id="dot-1" onClick={() => this.selectPhoto(1)}></li>
          <li id="dot-2" onClick={() => this.selectPhoto(2)}></li>
          <li id="dot-3" onClick={() => this.selectPhoto(3)}></li>
          <li id="dot-4" onClick={() => this.selectPhoto(4)}></li>
        </ul>
      </div>
    );
  }


}

export default MainCarousel;