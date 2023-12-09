import React, {Fragment, useState} from 'react';

import Header from './components/UI/Header/Header';
import Layout from './components/Layout/Layout';
import Profile from './pages/Profile/Profile';
import TaskList from './pages/TaskList/TaskList';
import { taskCollection } from './Constant';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
function App() {

  const [tasks, setTasks] = useState(taskCollection);

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
