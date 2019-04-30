import React from 'react';
import Greeting from './greeting';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';

const mapStateToProps = state => {
  const {session} = state;
  const {entities:{users}} = state;
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);