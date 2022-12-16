import React from 'react';

import Header from './components/UI/Header/Header';
import Layout from './components/Layout/Layout';
import { TaskContentProvider } from './store/task-context';

function App() {

  return (
    <TaskContentProvider>
      <div>
        <Header/>
        <Layout />
      </div>
    </TaskContentProvider>
  );
}

export default App;
