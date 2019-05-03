import React from 'react';
import SessionButtonsContainer from './session_buttons_container';
import ReiNav from './rei-nav';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <ReiNav />
    <header className='header-main'>
      <section className="header-container main-width">
        <Link to="/"><img height="44" src={window.images.crux_logo} alt="Crux Logo"></img></Link>
        <SessionButtonsContainer />
      </section>
    </header>
  </div>
);

export default Header;