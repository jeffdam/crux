import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.closeModal();
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      return (
        this.setState({[field]: e.target.value})
      );
    };
  }

  render (){
    const errors = this.props.errors.map(error => (
      <li key="error">{error}</li>
    ));
    const {formType, otherForm} = this.props;
    const emailInput = (formType === "Sign Up") ? 
      (<input type="text" onChange={this.update('email')} placeholder="Email" />) 
      : "";
  
    return (
      <div className="session-page">
        <div className="session-form-exit-button">×</div>
        <h1>{formType}</h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            onChange={this.update('username')} 
            placeholder="Username" 
          />
          {emailInput}
          <input 
            type="password" 
            onChange={this.update('password')} 
            placeholder="Password"/>
          <input type="submit" value={formType}/>
          {otherForm}
        </form>
        <ul>
          {errors}
        </ul>
      </div>
    );
  }
};

export default SessionForm;