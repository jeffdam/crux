import React from 'react';
import SessionButtonsContainer from './session_buttons_container';
import ReiNav from './rei-nav';
import { Link } from 'react-router-dom';
import RouteFinderForm from '../routes/route_finder/route_finder_form';

const Header = () => (
  <div>
    <ReiNav />
    <header className='header-main'>
      <section className="header-container main-width">
        <Link to="/"><img height="50" src={window.images.crux_logo} alt="Crux Logo"></img></Link>
        <div className="header-right-buttons">
          <SessionButtonsContainer />
          <a className='header-rei-logo' href="https://www.rei.com/" target="_blank"><img height="30" src={window.images.rei_logo} alt="Rei Logo" ></img></a>
        </div>
      </section>
    </header>
  </div>
);

export default Header;