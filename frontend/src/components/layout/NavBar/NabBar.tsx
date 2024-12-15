'use client';
import Image from 'next/image';
import logo from '@/assets/logo.svg';

import React, { useState } from 'react';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <div className="navbar-brand">
          <Image
            src={logo}
            alt="Logo"
            width="150"
            className="d-inline-block align-text-top"
          />
        </div>

        {/* Toggler for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {/* Dropdown for Filters */}
            <li
              className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-expanded={isDropdownOpen}
              >
                Filters
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <li>
                  <a className="dropdown-item" href="#">
                    Recommended
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Newest
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Most Viewed
                  </a>
                </li>
              </ul>
            </li>

            {/* Compounds Link */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Compounds
              </a>
            </li>

            {/* Areas Link */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Areas
              </a>
            </li>

            {/* Search Form */}
            <li className="nav-item">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
