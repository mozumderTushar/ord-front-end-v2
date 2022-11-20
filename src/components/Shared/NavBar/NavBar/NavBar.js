import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import logo from '../../../../images/logo/logo.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      {/* <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={ closeMobileMenu }>
          ORD
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={ handleClick }>
          <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
        </div>
        <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={ closeMobileMenu }>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={ onMouseEnter }
            onMouseLeave={ onMouseLeave }
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={ closeMobileMenu }
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            { dropdown && <Dropdown /> }
          </li>
          <li 
          className='nav-item'
          >
            <Link
              to='/products'
              className='nav-links'
              onClick={ closeMobileMenu }
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about-us'
              className='nav-links'
              onClick={ closeMobileMenu }
            >
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={ closeMobileMenu }
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={ closeMobileMenu }
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav> */}
      <div className="header_nav">

        <Link to='/'>
          <img className="logo" src={ logo } alt="" />
        </Link>

        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" onClick={ handleClick } > <i className={ click ? 'fas fa-times' : 'fas fa-bars' } /></label>

        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Services + </a>
              <ul>

                <li><a href="/">Installation and Commission</a></li>
                <li><a href="/">Service and Maintenance</a></li>
                <li><a href="/">ELB and Load Sanctioning</a></li>
                <li><a href="/">EPC</a></li>
                <li><a href="/">Power Coaling</a></li>
                <li><a href="/">Core Slitting</a></li>
                <li><a href="/">Core Annealing</a></li>
                
              </ul>
            </li>
            <li><a href="/">Products + </a>
              <ul>

                <li><a href="/">Lift</a></li>
                <li><a href="/">Transformers</a></li>
                <li><a href="/">Switchgear</a></li>
                <li><a href="/">Generators</a></li>
                <li><a href="/">BBT</a></li>
                <li><a href="/">Solar Energy Solutions</a></li>
                <li><a href="/">Medical Equipment</a></li>
                <li><a href="/">Fisheries</a></li>
                <li><a href="/">Agro </a></li>
              </ul>
            </li>
            <li><a href="/images">Gallery</a></li>
            <li><a href="/team">Team</a></li>           
            <li><a href="/about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>

  );
}

export default Navbar;