import React from 'react';
import TodoList from './components/todoList';

import './App.css';

function App() {

  return (
    <div className="App">
      <h1 className='App-header'>
        Mercury's Todo List
      </h1>

      <TodoList />

    </div>
  );
}

export default App;
