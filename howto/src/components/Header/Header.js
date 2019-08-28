import React from 'react';
import './header.scss';
import logo from '../../assets/landing-img.png';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='logo'>
      <img src={logo} className='toolbox' alt='Tools' />
      <h1>I can do that!</h1>
      <ul>
        <li>
          <Link to='/homepage'>
            <div className='icon'>
              <i className='fa fa-home' aria-hidden='true'></i>
              <i className='fa fa-home' aria-hidden='true'></i>
            </div>
            <div className='name'>
              <span data-text='Home'>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/profile'>
            <div className='icon'>
              <i className='fa fa-user' aria-hidden='true'></i>
              <i className='fa fa-user' aria-hidden='true'></i>
            </div>
            <div className='name'>
              <span data-text='Profile'>Profile</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/search'>
            <div className='icon'>
              <i className='fa fa-search' aria-hidden='true'></i>
              <i className='fa fa-search' aria-hidden='true'></i>
            </div>
            <div className='name'>
              <span data-text='Search'>Search</span>
            </div>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
