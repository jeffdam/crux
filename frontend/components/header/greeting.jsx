import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render () {
    const {currentUser} = this.props;
    if (currentUser) {
      return (
        <div>
          <h1>Welcome, {currentUser.username}!</h1>
          <button className="logout-button" onClick={this.props.logout}>Log out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="session-button" to="/signup">Sign Up</Link>
          <Link className="session-button" to="/login">Log in</Link>
        </div>
      );
    }
  }
}

export default Greeting;