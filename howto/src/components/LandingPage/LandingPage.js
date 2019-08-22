import React from 'react';
import logo from '../../assets/landing-img.png';
import './landingpage.scss';

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <img src={logo} alt='logo' />
      <h1>I can do that!</h1>
      <h3>
        Life hacks for the optimistic in you, by people just like you.,
        <br />
        Have some know-how? Pay it forward.
      </h3>
      <button>Sign Up</button>
      <button>Login</button>
      <p>Copyright © 2019 ICDT, LLC No Rights Reserved</p>
    </div>
  );
};

export default LandingPage;
