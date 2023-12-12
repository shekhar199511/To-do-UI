import React, {Fragment, useState} from 'react';

import Header from './components/UI/Header/Header';
import Layout from './components/Layout/Layout';
import TaskList from './pages/TaskList/TaskList';
import { taskCollection } from './Constant';
import withHoc from './hoc/wiithHoc';


function App() {

  const HocLayout = withHoc(<Layout />)

  const [tasks, setTasks] = useState(taskCollection);

  return (
    <div>
      <Header/>
      <HocLayout />
    </div>
  );
}

export default App;
