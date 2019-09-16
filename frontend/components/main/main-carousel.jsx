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

  render() {
    const { photos } = this.props;
    if (photos.length === 0) return null;

    return (
      <div className="main-carousel">
        <img src={photos[this.state.currentPhoto]} alt="photo" />
        <ul className="carousel-dots">
          <li id="dot-0" onClick={() => this.changePhoto(0)} className="checked-dot"></li>
          <li id="dot-1" onClick={() => this.changePhoto(1)}></li>
          <li id="dot-2" onClick={() => this.changePhoto(2)}></li>
          <li id="dot-3" onClick={() => this.changePhoto(3)}></li>
          <li id="dot-4" onClick={() => this.changePhoto(4)}></li>
        </ul>
      </div>
    );
  }


}

export default MainCarousel;