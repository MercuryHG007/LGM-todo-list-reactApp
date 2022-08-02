import React, {useState} from 'react';
import './App.css';


function App() {

  const [isCompletedScreen, setisCompletedScreen] = useState(false);

  return (
    <div className="App">
      <h1 className='App-header'>Mercury's Todo List</h1>

      <div className='todo-container'>

        <div className='todo-input'>

          <div className='input-component'>
            <label> Title </label>
            <input type='text' placeholder='Title of the Task?'></input>
          </div>

          <div className='input-component'>
            <label> Description </label>
            <input type='text' placeholder='Description of the Task?'></input>
          </div>

          <div className='input-component'>
            <button className='active-button add-task-button' type='submit' > Add Task</button>
          </div>

        </div>

        <div className='list-toggle-button-container'>
          {/* <button className='active-button left-button'> Todo Tasks </button> */}
          {/* <button className='unactive-button right-button'> Completed Tasks </button> */}
          <button 
            className={`unactive-button ${isCompletedScreen===false && 'active-button'}`}
            onClick={() => setisCompletedScreen(false)}
          > 
            Todo Task 
          </button>
          <button 
            className={`unactive-button ${isCompletedScreen === true && 'active-button'}`}
            onClick={() => setisCompletedScreen(true)}
          > 
            Completed Tasks 
          </button>
        </div>

        <div className='todo-list'>

          <ul>
            <li className='todo-list-item'>
              <div className='list-item-container'>
                <h3>Task 1</h3>
                <p>Decription</p>
              </div>
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default App;
