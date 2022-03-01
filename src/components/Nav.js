import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Nav = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header className="">
      <NavLink to="" className="text-logo">Space Travelers Hub</NavLink>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="rocket"
        >
          Rockets
        </NavLink>
        <NavLink
          to="/mission"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mission"
        >
          Missions
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="profile"
        >
          My Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
