import React from 'react';

const SessionButtons = ({ currentUser, logout, openModal }) => {

  const logoutButton = () => (
    <div className="username-logout-button">
      <h4 className="username">Currently logged in as {currentUser.username}.</h4>
      <button className="session-button" onClick={logout}>Log Out</button>
    </div>
  )

  const sessionButtons = () => (
    <nav className="login-signup-buttons">
      <button className="session-button" onClick={() => openModal({action: 'login', pathOnSuccess: null})}>Log In</button>
      <button className="session-button" onClick={() => openModal({action: 'signup', pathOnSuccess: null })}>Sign Up</button>
    </nav>
  )

  return (
    currentUser ? logoutButton() : sessionButtons()
  )

};

export default SessionButtons;