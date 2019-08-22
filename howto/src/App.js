import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

//components
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Signup/SignUp';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
