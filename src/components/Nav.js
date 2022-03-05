import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Nav = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header className="flex border-b-2 mb-5 py-3 items-center">
      <div className="flex items-center mr-auto">
        <img
          src="/planet.png"
          alt="Planet-logo"
          className="w-14 mr-4"
        />
        <NavLink
          to=""
          className="text-2xl font-bold font-inter text-gray-600"
        >
          Space Travelers&apos; Hub
        </NavLink>
      </div>
      <nav className="text-blue-500">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="rocket mr-4"
        >
          Rockets
        </NavLink>
        <NavLink
          to="/mission"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mission mr-4"
        >
          Missions
        </NavLink>
        |
        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="profile ml-4"
        >
          My Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
