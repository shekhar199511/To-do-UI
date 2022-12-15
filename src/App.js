import React, {Fragment, useState} from 'react';

import Header from './components/UI/Header/Header';
import Layout from './components/Layout/Layout';
import TaskList from './pages/TaskList/TaskList';
import { taskCollection } from './Constant';
function App() {

  const [tasks, setTasks] = useState(taskCollection);

  return (
    <div>
      <Header/>
      <Layout />
    </div>
  );
}

export default App;
