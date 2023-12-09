import React, {Fragment, useState} from 'react';

import Header from './components/UI/Header/Header';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Profile from './pages/Profile/Profile'
function App() {

  return (
    <Router>    
      <div>
        <Header/>
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/" component={Layout}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
