import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

class AreaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.area;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFAQModal = this.handleFAQModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchArea(this.props.match.params.areaId);
    if (this.props.match.path === "/add/climb-area/:areaId") {
      this.props. openModal('areaCreateFAQ');
    }
  } 

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.areaId !== this.props.match.params.areaId) {
      this.props.fetchArea(this.props.match.params.areaId);   
    }    
    if ((this.props.match.path === "/areas/:areaId/edit") && (this.props.area.author_id != this.props.currentUser)) {
      this.props.history.push(`/areas/${this.props.match.params.areaId}`);
    }

    if (!this.state) this.setState(this.props.area);
  }

  update(field){
    return (e) => {
      return this.setState({[field]: e.target.value });
    };
  }

  handleFAQModal(e) {
    e.preventDefault();
    this.props.openModal('areaCreateFAQ');
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    
    formData.append('area[name]', this.state.name);
    formData.append('area[parent_id]', this.state.parent_id);
    formData.append('area[author_id]', this.state.author_id);
    formData.append('area[description]', this.state.description);
    formData.append('area[getting_there]', this.state.getting_there);
    formData.append('area[latitude]', this.state.latitude);
    formData.append('area[longitude]', this.state.longitude);

    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append('area[photos][]', this.state.photos[i]);
    }

    if (this.props.match.path === "/areas/:areaId/edit") {
      formData.append('area[id]', this.state.id);
    }

    this.props.formAction(formData)
      .then(({areaId}) => (
        this.props.history.push(`/areas/${areaId}`)
      ));
  } 

  render() {
    const parent = this.props.parent;
    if (!parent) return null;
    if (!this.props.area) return null;  
    if ((this.props.match.path === "/areas/:areaId/edit") && (this.props.area.author_id != this.props.currentUser)) {
      return null;
    }

    if (!this.state) return null;  

    let nameErr = "";
    let descErr = "";
    let getErr = "";
    let latErr = "";
    let longErr = "";

    this.props.errors.map((error, idx) => {
      if (error === "Name can't be blank" && nameErr === "") {
        nameErr = error;
      } else if (error === "Description can't be blank" && descErr === "") {
        descErr = error;
      } else if (error === "Getting there can't be blank" && getErr === "") {
        getErr = error;
      } else if (error === "Latitude can't be blank" && latErr === "") {
        latErr = error;
      } else if (error === "Longitude can't be blank" && longErr === "") {
        longErr = error;
      }
    });

    const formTitle = this.props.formType === "Create Area" ? (<h1>New Area in {this.props.parent.name}</h1>) : <h1>Edit {this.props.area.name} Area</h1>;
    const createFAQ = this.props.formType === "Create Area" ? <a href="#" onClick={this.handleFAQModal}>FAQ about new areas & routes</a> : "" 

  return (
      <section className="form-page main-padding">
        <div className="form-header">
          {formTitle}
          {createFAQ}
        </div>
        <form onSubmit={this.handleSubmit}>   
          <div className="form-component">
            <h3>Area Name</h3><div className="errors">{nameErr}</div>
            <input 
              type="text" 
              onChange={this.update('name')} 
              value={this.state.name}
              maxLength="100"
            />
            <p className="form-char-limit">{100 - this.state.name.length} characters</p>            
          </div>
          <div className="form-component">
            <h3>Description</h3><div className="errors">{descErr}</div>
            <textarea 
              type="text" 
              onChange={this.update('description')} 
              value={this.state.description}
              placeholder="Sunny? Access fees? Crowded? Secluded? Rock type/quality?"
              maxLength="2000"
            ></textarea>
            <p className="form-char-limit">{2000 - this.state.description.length} characters</p>  
          </div>

          <div className="form-component">
            <h3>Getting There</h3><div className="errors">{getErr}</div>
            <textarea 
              type="text" 
              onChange={this.update('getting_there')} 
              value={this.state.getting_there}
              placeholder="Be specific and clear. How long is the approach?"
              maxLength="2000"
            ></textarea>
            <p className="form-char-limit">{2000 - this.state.getting_there.length} characters</p>   
          </div>

          <div className="lat-long">
            <div className="form-component">
              <h3>Latitude</h3><div className="errors">{latErr}</div>
              <input 
                type="number" 
                step="any" 
                min="-90"
                max="90"
                placeholder="Between -90 and 90."
                onChange={this.update('latitude')} 
                value={this.state.latitude}
              />
            </div>

            <div className="form-component">
              <h3>Longitude</h3><div className="errors">{longErr}</div>
              <input 
                type="number" 
                step="any" 
                min="-180"
                max="180"
                placeholder="Between -180 and 180."
                onChange={this.update('longitude')} 
                value={this.state.longitude}
              />
            </div>
          </div>


          <div className="form-component upload-photos">
            <div className="flex-row baseline">
              <h3>Upload Photos</h3>&nbsp;&nbsp;Optional
            </div>

            <div>
              <h4>Guidelines</h4>
              <ul>
                <li>Avoid duplicating existing photos and too many "butt-shots".</li>
                <li>Photos should be least 600 x 600 pixels.</li>
                <li>Accepted image formats: .jpg, .png.</li>
              </ul>
            </div>

            <input
              type="file"
              onChange={e => this.setState({ photos: e.target.files })}
              multiple
              accept=".jpg,.png"
            />

          </div>

          <div className="flex-row form-submission-buttons">
            <input type="submit" value="Save Area" />
            <Link to={`/areas/${this.props.match.params.areaId}`}>Cancel</Link>
          </div>

        </form>
      </section>
    )
  }
}

export default AreaForm;

