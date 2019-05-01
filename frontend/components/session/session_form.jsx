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
    const user = Object.assign({}, this.state); // why do you need this?
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
  
    const {formType} = this.props;
    const header = formType === 'login' ? <h1>Log In</h1> : <h1>Sign Up</h1>;
    const otherLink = formType === 'login' ? '/signup' : '/login';
    const linkText = formType === 'login' ? 'Sign Up' : 'Log In';
    const buttonText = formType === 'login' ? 'Log In' : 'Sign Up';
    const email = formType === 'signup' ? (<input className="session-input" type="text" onChange={this.update('email')} placeholder="Email"/>) : "";

    return (
      <div className="session-page">
        {header}
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input className="session-input" type="text" onChange={this.update('username')} placeholder="Username" />
          {email}
          <input className="session-input" type="password" onChange={this.update('password')} placeholder="Password"/>
          <input className="session-form-button" type="submit" value={buttonText}/>
          <Link to={otherLink}>{linkText}</Link>
        </form>
        <ul>
          {errors}
        </ul>
      </div>
    );
  }
};

export default SessionForm;