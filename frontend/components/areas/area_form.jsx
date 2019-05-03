import React from 'react';
import { Link } from 'react-router-dom';

class AreaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.area;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount(){
    this.props.fetchArea(this.props.match.params.parentAreaId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.parentAreaId !== this.props.match.params.parentAreaId) {
      this.props.fetchArea(this.props.match.params.parentAreaId);
    }
  }

  update(field){
    return (e) => {
      return this.setState({[field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state)
      .then(({area: {id}}) => (
        this.props.history.push(`/areas/${id}`)
      ));
  }

  handleCancel(e){
    e.preventDefault();
    this.props.history.go(-1);
  }

  render() {
    const parent = this.props.parent;
    if (!parent) return null;

    return (
      <section className="area-form-page main-width main-padding">
        <h1>New Area in {parent.name}</h1>
        <form onSubmit={this.handleSubmit}>
          
          <div className="form-component"><h3>Title</h3>
            <input 
              type="text" 
              onChange={this.update('name')} 
              value={this.state.name}
              maxLength="100"
            />
            <p className="form-char-limit">{100 - this.state.name.length} characters</p>            
            
          </div>

          <div className="form-component"><h3>Description</h3>
            <textarea 
              type="text" 
              onChange={this.update('description')} 
              value={this.state.description}
              placeholder="Sunny? Access fees? Crowded? Secluded? Rock type/quality?"
              maxLength="2000"
            ></textarea>
            <p className="form-char-limit">{2000 - this.state.description.length} characters</p>     
          </div>

          <div className="form-component"><h3>Getting There</h3>
            <textarea 
              type="text" 
              onChange={this.update('getting_there')} 
              value={this.state.getting_there}
              placeholder="Be specific and clear. How long is the approach?"
              maxLength="2000"
            ></textarea>
            <p className="form-char-limit">{2000 - this.state.getting_there.length} characters</p>   
          </div>
          <div className="long-lat">
            <div className="form-component"><h3>Latitude</h3>
              <input 
                type="number" 
                step="0.000001" 
                min="-90"
                max="90"
                onChange={this.update('latitude')} 
                value={this.state.latitude}
              />
            </div>

            <div className="form-component"><h3>Longitude</h3>
              <input 
                type="number" 
                step="0.000001" 
                min="-180"
                max="180"
                onChange={this.update('longitude')} 
                value={this.state.longitude}
              />
            </div>
          </div>
          <div className="flex-row form-submission-buttons">
            <input type="submit" value="Save Area"/>
            <Link to="/" onClick={this.handleCancel}>Cancel</Link>
          </div>

        </form>
      </section>
    )
  }
}

export default AreaForm;