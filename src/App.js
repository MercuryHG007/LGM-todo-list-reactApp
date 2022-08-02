import React, {useState} from 'react';
import {BsFillFileEarmarkCheckFill} from 'react-icons/bs';
import {IoMdTrash} from 'react-icons/io';
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

          <div className='list-item-container'>
            <div className='list-item-content'>
              <h3>Task 1</h3>
              <p>Description</p>
            </div>
            <div className='list-item-button-container'>
              <button> <IoMdTrash className='icon trash-icon' /> </button>
              <button> <BsFillFileEarmarkCheckFill className='icon check-icon'/> </button>
            </div>
          </div>

          <div className='list-item-container'>
            <div className='list-item-content'>
              <h3>Task 1</h3>
              <p>Description</p>
            </div>
            <div className='list-item-button-container'>
              <button> <IoMdTrash className='icon trash-icon' /> </button>
              <button> <BsFillFileEarmarkCheckFill className='icon check-icon'/> </button>
            </div>
          </div>
          


        </div>

      </div>
    </div>
  );
}

export default App;
