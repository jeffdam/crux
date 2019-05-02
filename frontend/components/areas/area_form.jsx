import React from 'react';

class AreaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.area;
    this.handleSubmit = this.handleSubmit.bind(this);
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

    return (
      <section>
        {/* <h1>New Area in {this.state.parent_name}</h1> */}
        <h1>New Area in {this.props.area.parent_name}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input type="text" onChange={this.update('name')} value={this.state.name}/>
          </label>
          <label>Description
            <textarea 
              type="text" 
              onChange={this.update('description')} 
              value={this.state.description}
              placeholder="Sunny? Access fees? Crowded? Secluded? Rock type/quality?"
            ></textarea>
          </label>
          <label>Getting There
            <textarea 
              type="text" 
              onChange={this.update('getting_there')} 
              value={this.state.getting_there}
              placeholder="Be specific and clear. How long is the approach?"
            ></textarea>
          </label>
          <label>Latitude
            <textarea 
              type="number" 
              step="0.000001" 
              min="-90"
              max="90"
              onChange={this.update('latitude')} 
              value={this.state.latitude}
            ></textarea>
          </label>
          <label>Longitude
            <textarea 
              type="number" 
              step="0.000001" 
              min="-180"
              max="180"
              onChange={this.update('longitude')} 
              value={this.state.longitude}
            ></textarea>
          </label>
          <input type="submit" value="Save Area"/>
        </form>
      </section>
    )
  }
}

export default AreaForm;