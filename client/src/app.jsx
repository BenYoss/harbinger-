import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './homepage.jsx';
import Login from './login.jsx';
import Profile from './profile.jsx';
import Reviews from './reviews.jsx';
import Search from './search.jsx';
import UserProfile from './userProfile.jsx';
import { styled, Backdrop } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/searchresults'>
            <Search />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/me">
            <Profile />
          </Route>
          <Route path='/review'>
            <Reviews />
          </Route>
        </Switch>
        <Route path='/userProfile'>
          <UserProfile />
        </Route>
      </div>
    </Router>
  );
}

export default App;

// |App will be housing every component within it.
//  \The router-dom methods will be used to activate different components based on route-based conditionals.
