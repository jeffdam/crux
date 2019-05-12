import React from 'react';
import SessionButtonsContainer from './session_buttons_container';
import { Link, NavLink } from 'react-router-dom';
import RouteFinderForm from '../routes/route_finder/route_finder_form';

const Header = () => (
  <div>
    <header className='header-main'>
      <section className="header-container main-width">
        <div className="header-left">
          <Link to="/"><img height="50" src={window.images.crux_logo} alt="Crux Logo"></img></Link>
          <div className="header-nav">
            <Link to="/route-finder">Route Finder</Link>
          </div>
        </div>
        <div className="header-right-buttons">
          <SessionButtonsContainer />
        </div>
      </section>
    </header>
  </div>
);

export default Header;