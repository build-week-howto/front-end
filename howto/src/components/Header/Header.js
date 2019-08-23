import React from 'react';
import './header.scss';
import logo from '../../assets/landing-img.png';

const Header = () => {
  return (
    <header className='logo'>
      <img src={logo} className='toolbox' alt='Tools' />
      <h1>I can do that!</h1>
    </header>
  );
};

export default Header;
