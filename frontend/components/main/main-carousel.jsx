import React from 'react';

class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: 0
    };

    this.changePhoto = this.changePhoto.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.changePhoto, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changePhoto(){
    document.getElementById(`dot-${this.state.photo}`).classList.remove("checked-dot");
    const nextPhotoIndex = (this.state.photo + 1) % this.props.photos.length;
    document.getElementById(`dot-${nextPhotoIndex}`).classList.add("checked-dot");
    this.setState({ photo: nextPhotoIndex });
  }

  render() {
    const { photos } = this.props;
    if (photos.length === 0) return null;

    return (
      <div className="main-carousel">
        <img src={photos[this.state.photo]} alt="photo" />
        <ul className="carousel-dots">
          <li className="checked-dot" id="dot-0"></li>
          <li id="dot-1"></li>
          <li id="dot-2"></li>
          <li id="dot-3"></li>
          <li id="dot-4"></li>
        </ul>
      </div>
    );
  }


}

export default MainCarousel;