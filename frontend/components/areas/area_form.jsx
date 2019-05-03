import React from 'react';

class AreaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.area;
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    const parent = this.props.parent;
    if (!parent) return null;

    return (
      <section className="area-form-page main-width main-padding">
        <h1>New Area in {parent.name}</h1>
        <form onSubmit={this.handleSubmit}>
          
          <label><h2>Title</h2>
            <input 
              type="text" 
              onChange={this.update('name')} 
              value={this.state.name}
              maxLength="100"
            />
            <p className="form-char-limit">{100 - this.state.name.length} characters</p>            
            
          </label>

          <label><h2>Description</h2>
            <textarea 
              type="text" 
              onChange={this.update('description')} 
              value={this.state.description}
              placeholder="Sunny? Access fees? Crowded? Secluded? Rock type/quality?"
              maxLength="2000"
            ></textarea>
            <p className="form-char-limit">{2000 - this.state.description.length} characters</p>     
          </label>

          <label><h2>Getting There</h2>
            <textarea 
              type="text" 
              onChange={this.update('getting_there')} 
              value={this.state.getting_there}
              placeholder="Be specific and clear. How long is the approach?"
              maxLength="2000"
            ></textarea>
            <p className="form-char-limit">{2000 - this.state.getting_there.length} characters</p>   
          </label>
          <div className="long-lat">
            <label><h2>Latitude</h2>
              <input 
                type="number" 
                step="0.000001" 
                min="-90"
                max="90"
                onChange={this.update('latitude')} 
                value={this.state.latitude}
              />
            </label>

            <label><h2>Longitude</h2>
              <input 
                type="number" 
                step="0.000001" 
                min="-180"
                max="180"
                onChange={this.update('longitude')} 
                value={this.state.longitude}
              />
            </label>
          </div>

          <input type="submit" value="Save Area"/>

        </form>
      </section>
    )
  }
}

export default AreaForm;