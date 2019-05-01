import React from 'react';

const SessionButtons = ({ currentUser, logout, openModal }) => {

  const logoutButton = () => (
    <button className="session-button" onClick={logout}>Log Out</button>
  )

  const sessionButtons = () => (
    <nav className="login-signup-buttons">
      <button className="session-button" onClick={() => openModal('login')}>Log In</button>
      <button className="session-button" onClick={() => openModal('signup')}>Sign Up</button>
    </nav>
  )

  return (
    currentUser ? logoutButton() : sessionButtons()
  )

};

export default SessionButtons;