import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOtherSessionModal = this.handleOtherSessionModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    
    this.props.processForm(user)
      .then(() => {
        if (this.props.pathOnSuccess) {
          this.props.closeModal()
            .then(this.props.history.push(this.props.pathOnSuccess));
        } else {
          this.props.closeModal();
        } 
      });
  }

  handleOtherSessionModal(e) {
    e.preventDefault();
    this.props.openOtherSessionModal();
  }

  demoLogin () {
    this.setState({ username: "demo_user", password: "cruxR0cks" });
  }

  update(field) {
    return (e) => {
      return (
        this.setState({[field]: e.target.value})
      );
    };
  }

  render (){
    const errors = this.props.errors.map((error,idx) => (
      <li key={idx}>{error}</li>
    ));
    const {formType} = this.props;
    
    const emailInput = (formType === "Sign Up") ? 
      (<input type="text" onChange={this.update('email')} placeholder="Email" />) 
      : "";

    const demoForm = (formType === "Log In") ? 
      (<button onClick={this.demoLogin}>Demo Log In</button>)
      : "";

    const otherForm = (formType === "Sign Up") ? "Log In" : "Sign Up";
  
    return (
      <div className="session-page">
        
        <h2>{formType}</h2>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            onChange={this.update('username')} 
            placeholder="Username"
            value={this.state.username} 
          />
          {emailInput}
          <input 
            type="password" 
            onChange={this.update('password')} 
            placeholder="Password"
            value={this.state.password} 
            />
            
          <input type="submit" value={formType}/>
          {demoForm}
        </form>

        <a onClick={this.handleOtherSessionModal}>{otherForm}</a>
        
        <ul>
          {errors}
        </ul>
      </div>
    );
  }
};

export default SessionForm;