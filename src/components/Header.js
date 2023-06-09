import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import '../css/header.css';

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-lg-between">
          <Link to="/" className="nav-link px-2 text-white">
            <FontAwesomeIcon icon={faHeadphonesSimple} className="headphones-simple" />
          </Link>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? 'nav-link px-2 text-danger' : 'nav-link px-2 text-white';
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? 'nav-link px-2 text-danger' : 'nav-link px-2 text-white';
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/members"
                className={({ isActive }) => {
                  return isActive ? 'nav-link px-2 text-danger' : 'nav-link px-2 text-white';
                }}
              >
                Artists
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/songs"
                className={({ isActive }) => {
                  return isActive ? 'nav-link px-2 text-danger' : 'nav-link px-2 text-white';
                }}
              >
                SongList
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
