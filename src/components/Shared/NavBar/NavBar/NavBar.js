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
      <div className="header">

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

                <li><a href="/installation">Installation and Commission</a></li>
                <li><a href="/maintenance">Service and Maintenance</a></li>
                <li><a href="/elb">ELB and Load Sanctioning</a></li>
                <li><a href="/epc">EPC</a></li>
                <li><a href="/power">Power Coaling</a></li>
                <li><a href="/slitting">Core Slitting</a></li>
                <li><a href="/annealing">Core Annealing</a></li>
                
              </ul>
            </li>
            <li><a href="/">Products + </a>
              <ul>

                <li><a href="/lift">Lift</a></li>
                <li><a href="/transformers">Transformers</a></li>
                <li><a href="/switchgear">Switchgear</a></li>
                <li><a href="/generators">Generators</a></li>
                <li><a href="/bbt">BBT</a></li>
                <li><a href="/ses">Solar Energy Solutions</a></li>
                <li><a href="/other">Other Products</a></li>

              </ul>
            </li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>

  );
}

export default Navbar;