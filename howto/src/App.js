import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

//components
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Signup/SignUp';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/homepage' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
