import { useState } from "react";
import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [task, setTask] = useState([]); //using usestate hook that returns array state

  const Todo = () => {
    //fetching task
    let inputTask = document.getElementById("input-task");
    //changing state
    let newTaskState = {
      completed: false,
      title: inputTask.value,
      id: Date.now(), //adding date
    };
    //pushing new state
    task.push(newTaskState);
    //displaying new task by setting state
    console.log(task);
    setTask(task);
    inputTask.value = "";
  };
  return (
    <div className="App">
      <div className="container">
        <div className="todoList">
          <div className="icon">
            <i className="fa-solid fa-list"></i>
          </div>
          <input
            className="enter"
            type="text"
            placeholder="enter task"
            id="input-task"
          />
          <div className="icon" onClick={Todo}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      {/* passing data to todolist component */}
      <TodoList addTaskHandler={task} />
    </div>
  );
}

export default App;
