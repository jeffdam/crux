import React from 'react';

class UploadPhotosForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      photos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let { actionType } = this.props;
    e.preventDefault();

    const formData = new FormData();

    formData.append(`${actionType}[id]`, this.state.id);


    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append(`${actionType}[photos][]`, this.state.photos[i]);
    }
    
    if (actionType === 'area') {
      this.props.updateArea(formData)
        .then(this.props.closeModal())
        .then(({ areaId }) => (
          this.props.history.push(`/areas/${areaId}`)));
    } else {
      this.props.updateRoute(formData)
        .then(this.props.closeModal())
        .then(({ routeId }) => (
          this.props.history.push(`/routes/${routeId}`)));
    }
  } 

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="upload-photos-form">
        <h3>Upload Photos</h3>
        <h4>Guidelines</h4>
        <ul>
          <li>Avoid duplicating existing photos and too many "butt-shots".</li>
          <li>Photos should be least 600 x 600 pixels.</li>
          <li>Accepted image formats: .jpg, .png.</li>
        </ul>
        <input
          type="file"
          onChange={e => this.setState({ photos: e.target.files })}
          multiple
          accept=".jpg,.png"
        />
        <input type="submit" value="Upload Photos" />
      </form>

    )
  }
}

export default UploadPhotosForm;