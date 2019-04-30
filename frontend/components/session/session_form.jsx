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
    const header = formType === 'login' ? <h1>Log in</h1> : <h1>Sign up</h1>;
    const otherLink = formType === 'login' ? '/signup' : '/login';
    const linkText = formType === 'login' ? 'Sign up' : 'Log in';
    const buttonText = formType === 'login' ? 'Log in' : 'Sign up';
    const email = formType === 'signup' ? (<label>Email:
            <input type="text" onChange={this.update('email')} />
    </label>) : "";

    return (
      <div className="session-page">
        {header}
        <form className="session-form" onSubmit={this.handleSubmit}>
          <label>Username: 
            <input type="text" onChange={this.update('username')} />
          </label>
          {email}
          <label>Password: 
            <input type="password" onChange={this.update('password')}/>
          </label>
          <input className="session-form-button" type="submit" value={buttonText}/>
        </form>
        <Link to={otherLink}>{linkText}</Link>
        <ul>
          {errors}
        </ul>
      </div>
    );
  }
};

export default SessionForm;