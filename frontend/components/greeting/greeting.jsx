import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render () {
    const {currentUser} = this.props;
    if (currentUser) {
      return (
        <div>
          <h1>Welcome, {currentUser.username}!</h1>
          <button onClick={this.props.logout}>Log out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log in</Link>
        </div>
      );
    }
  }
}

export default Greeting;