import React, {useEffect, useState} from 'react';
import {BsFillFileEarmarkCheckFill} from 'react-icons/bs';
import {IoMdTrash} from 'react-icons/io';
import './App.css';

function App() {

  const [IsCompletedScreen, setIsCompletedScreen] = useState(false);
  const [allTasks, setallTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTitle, setnewTitle] = useState("");
  const [newDesc, setnewDesc] = useState("");

  const handleAddTask = () => {
    let newTask = {
      title: newTitle,
      description: newDesc,
    };

    // copy old tasks array
    let updatedTaskListArr = [...allTasks];
    // add new task
    updatedTaskListArr.push(newTask);
    // assign the new array to old array
    setallTasks(updatedTaskListArr);

    // persist the list even after page refresh.
    // used JSON.stringify to store the array of task in form of string.
    localStorage.setItem('TaskList',JSON.stringify(updatedTaskListArr));
  };

  const handleDeleteTask = (index) => {
    let reducedTaskListArr = [...allTasks];
    reducedTaskListArr.splice(index,1); // 2nd parameter means remove one item only
    localStorage.setItem('TaskList',JSON.stringify(reducedTaskListArr));
    setallTasks(reducedTaskListArr);
  };

  const handleCompleteTask = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();

    let completedOnTimeStamp = dd + '-' + mm + '-' + yy + ' at ' + h + ":" + m;

    let filteredTask = {
      ...allTasks[index],
      completedOn: completedOnTimeStamp
    }

    let updatedCompletedTaskArr = [...completedTasks];
    updatedCompletedTaskArr.push(filteredTask);
    setCompletedTasks(updatedCompletedTaskArr);
    handleDeleteTask(index);
    localStorage.setItem('CompletedTaskList',JSON.stringify(updatedCompletedTaskArr));
  }

  const handleDeleteCompletedTask = (index) => {
    let reducedCompletedTaskListArr = [...completedTasks];
    reducedCompletedTaskListArr.splice(index,1); // 2nd parameter means remove one item only
    localStorage.setItem('CompletedTaskList',JSON.stringify(reducedCompletedTaskListArr));
    setCompletedTasks(reducedCompletedTaskListArr);
  }

  // Used useEffect for whenever the page is rendered 1st time
  // to check if there is any existing TaskList in the local storage of browser.
  useEffect(() => {
    // used JSON.parse to convert the string of tasks back to Array
    let savedTaskList = JSON.parse(localStorage.getItem('TaskList'));
    let savedCompletedTaskList = JSON.parse(localStorage.getItem('CompletedTaskList'));
    if(savedTaskList){
      // assign the saved array to the state
      setallTasks(savedTaskList);
    }
    if(savedCompletedTaskList){
      setCompletedTasks(savedCompletedTaskList);
    }
  },[])

  return (
    <div className="App">
      <h1 className='App-header'>Mercury's Todo List</h1>

      <div className='todo-container'>

        <div className='todo-input'>

          <div className='input-component'>
            <label> Title </label>
            <input type='text' value={newTitle} onChange={(e) => setnewTitle(e.target.value)} placeholder='Title of the Task?'></input>
          </div>

          <div className='input-component'>
            <label> Description </label>
            <input type='text' value={newDesc} onChange={(e) => setnewDesc(e.target.value)} placeholder='Description of the Task?'></input>
          </div>

          <div className='input-component'>
            <button className='active-button add-task-button' onClick={handleAddTask} type='submit' > Add Task</button>
          </div>

        </div>

        <div className='list-toggle-button-container'>
          {/* <button className='active-button left-button'> Todo Tasks </button> */}
          {/* <button className='unactive-button right-button'> Completed Tasks </button> */}
          <button 
            className={`unactive-button left-button ${IsCompletedScreen===false && 'active-button'}`}
            onClick={() => setIsCompletedScreen(false)}
          > 
            Todo Tasks 
          </button>
          <button 
            className={`unactive-button right-button ${IsCompletedScreen === true && 'active-button'}`}
            onClick={() => setIsCompletedScreen(true)}
          > 
            Completed Tasks 
          </button>
        </div>

        <div className='todo-list'>

          {IsCompletedScreen===false && allTasks.map((item,index) =>{
            return(
              <div className='list-item-container' key={index}>
                <div className='list-item-content'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className='list-item-button-container'>
                  <button 
                    onClick={() => handleCompleteTask(index)}
                  > 
                    <BsFillFileEarmarkCheckFill 
                      className='icon check-icon'
                    /> 
                  </button>
                  <button 
                    onClick={() => handleDeleteTask(index)}
                  > 
                    <IoMdTrash 
                      className='icon trash-icon'
                    /> 
                  </button>
                </div>
              </div>
            )
          })}
          {IsCompletedScreen===true && completedTasks.map((item,index) =>{
            return(
              <div className='list-item-container' key={index}>
                <div className='list-item-content'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><small>Completed on: {item.completedOn}</small></p>
                </div>
                <div className='list-item-button-container'>
                  <button 
                    onClick={() => handleDeleteCompletedTask(index)}
                  > 
                    <IoMdTrash className='icon trash-icon' /> 
                  </button>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </div>
  );
}

export default App;
