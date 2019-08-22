import React from 'react';
import logo from '../../assets/landing-img.png';
import './landingpage.scss';

import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <div className='logo'>
        <img className='toolbox"' src={logo} alt='logo' />
      </div>

      <h1>I can do that!</h1>
      <h3>
        Life hacks for the optimistic in you, by people just like you.,
        <br />
        Have some know-how? Pay it forward.
      </h3>
      <Link to='/signup'>
        <button>Sign Up</button>
      </Link>
      <Link to='/signin'>
        <button>Login</button>
      </Link>

      <p>Copyright © 2019 ICDT, LLC No Rights Reserved</p>
    </div>
  );
};

export default LandingPage;
