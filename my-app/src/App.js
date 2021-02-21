import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './user/login.js'
import CreateAccount from './user/createaccount.js'

function App() {
  return (

    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link className='login' to='/login'>Login</Link>
          </li>
          <li>
            <Link className= 'createaccount' to='/createaccount'>Create Account</Link>
          </li>
          <li>
            <Link className= 'events-home' to='/protected'>Events</Link>
          </li>
        </ul>

        <Switch>

          {/*<Route path='/protected' component={} /> */}
          <Route path='/login' component={Login} />
          <Route path='/createaccount' component={CreateAccount} />


          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;