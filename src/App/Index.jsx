import React from 'react';
import { TodoProvider } from '../components/todoContext';
import { AppUI } from './appUI';


function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;

