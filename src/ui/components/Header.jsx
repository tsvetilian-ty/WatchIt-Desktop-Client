import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="nav">
    <NavLink activeClassName="selected" className="nav-item" to="/movies">
      <i className="fas fa-film" /> Movies
    </NavLink>
    <NavLink activeClassName="selected" className="nav-item" to="/tvshows">
      <i className="fas fa-tv" /> TV Shows
    </NavLink>
    <NavLink activeClassName="selected" className="nav-item" to="/settings">
      <i className="fas fa-cog" /> Settings
    </NavLink>
  </div>
);

export default Header;
