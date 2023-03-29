import React from "react";
import { useState } from "react";
//adding,updating,deleting task using api calls
function TodoListItem({ task }) {
  const [edit, editTask] = useState(["fa-solid fa-pen"]);
  const [isCompleted, setIsCompleted] = useState(task.completed);
  //adding style of line through to completed tasks
  const textStyle = {
    textDecoration: isCompleted
      ? "line-through 2px hsl(199deg 31% 14%)"
      : "none",
  };
  //function to edit task

  const editTaskHandler = (e) => {
    let task = e.target.parentElement.parentElement.children[0];
    //matching class, if it matches to edit icon
    if (edit === "fa-solid fa-pen-to-square") {
      //deleting task and replacing eith input
      let editText = task.children[1].innerText;
      //console.log(editText);
      const n = document.createElement("input");
      n.setAttribute("type", "text");
      n.setAttribute("value", editText);
      // console.log(input);
      task.appendChild(n); //append new task
      task.children[1].remove(); //remove old
      editTask("fa-solid fa-check");
    } else {
      let newTask = task.children[1].value;
      console.log(newTask);
      const div = document.createElement("div");
      div.setAttribute("style", textStyle); //adding crossing line
      div.innerText = newTask;
      task.appendChild(div);
      task.children[1].remove();
      editTask("fa-solid fa-pen-to-square");
    }
  };

  const deleteTaskHandler = (e) => {
    let task = e.target.parentElement.parentElement.children[0];
    task.parentElement.remove();
  };

  const completeTaskHandler = (e) => {
    if (isCompleted === true) {
      console.log(e.target.parentElement);
      setIsCompleted(false);
    } else {
      setIsCompleted(true);
    }
  };

  const finalStyle = {
    color: isCompleted ? "blue" : "red",
  };
  return (
    <div className="todolistitem">
      <div className="iconTasks">
        <i
          className="fa-solid fa-circle-check"
          onClick={completeTaskHandler}
          style={finalStyle}
        ></i>
        <div className="name" style={textStyle}>
          {task.title}
        </div>
      </div>
      <div className="icons">
        {isCompleted ? (
          <i
            className={edit}
            onClick={() => alert("Completed Task can't be edited")}
            id="icons"
          ></i>
        ) : (
          <i className={edit} id="icons" onClick={editTaskHandler}></i>
        )}
        <i
          className="fa-solid fa-trash"
          id="icons"
          onClick={deleteTaskHandler}
        ></i>
      </div>
    </div>
  );
}

export default TodoListItem;
