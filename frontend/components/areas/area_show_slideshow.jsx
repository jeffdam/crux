import React from 'react';

class AreaShowSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 0
    };

    this.changePhoto = this.changePhoto.bind(this);
  }

  componentDidMount() {
    // this.interval = setInterval(this.changePhoto, 15000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  changePhoto(){
    const nextPhotoIndex = (this.state.show + 1) % this.props.photos.length;
    this.setState({ show: nextPhotoIndex });
  }

  render() {
    const { photos } = this.props;
    if (photos.length === 0) return null;
    
    return (
      <div className="slideshow">
        <img src={window.images.photoTemplate} alt=""/>
      </div>
    );
  }
}

export default AreaShowSlideshow; 