import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faCog, faEnvelope, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import './css/nav.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`navbar__list ${isMenuOpen ? 'show' : ''}`}>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <FontAwesomeIcon icon={faInfo} /> About
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <FontAwesomeIcon icon={faCog} /> Services
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </a>
        </li>
      </ul>
      <div className="navbar__search">
        <input type="text" placeholder="Search" />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
