import React from 'react';
import logo from '../../assets/image1.jpg';
import './landingpage.scss';

import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <section className='welcome'>
        <h2>Life hacks for the optimistic in you.</h2>
        <h3>By people just like you.</h3>

        <img src={logo} className='tools' alt='Tools' />

        <h4>Have some know-how?</h4>
        <h5>Pay it forward.</h5>
      </section>

      <section className='buttons'>
        <Link to='/signup'>
          <button>Sign Up</button>
        </Link>
        <Link to='/signin'>
          <button>Login</button>
        </Link>
      </section>

      <footer>Copyright © 2019 ICDT, LLC No Rights Reserved</footer>
    </div>
  );
};

export default LandingPage;
