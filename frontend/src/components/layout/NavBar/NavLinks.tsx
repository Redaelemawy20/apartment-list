'use client';
import Link from 'next/link';
import { useState } from 'react';
const NavLinks = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
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
              Recommended
            </a>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <li>
                <Link className="dropdown-item" href={'/most-recommended'}>
                  Recommended
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'/most-recent'}>
                  Newest
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={'/most-viewed'}>
                  Most Viewed
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href={'/projects'}>
              Projects
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href={'/areas'}>
              Areas
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href={'/search'}>
              Search
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
