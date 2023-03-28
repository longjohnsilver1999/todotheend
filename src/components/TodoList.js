import React from "react";
import { useState, useEffect } from "react"; //importing necessary hooks
import { Bars } from "react-loader-spinner";
import TodoListItem from "./TodoListItem";
function TodoList({ addTaskHandler }) {
  //updating and returning state
  const [todo, setTodo] = useState([]); //array
  const [loading, setLoading] = useState(false);
  const [inputTask, setInputTask] = useState(addTaskHandler);
  //using useeffect hook to add and display fetched state including object including data
  useEffect(() => {
    //fetch from api
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          //setting state,adding to state
          setTodo(json);
          setLoading(true);
        }, 1000);
        console.log(json);
      });
  }, []);

  //adding newly added  task to state
  useEffect(() => {
    let bringTasks = addTaskHandler.map((task, index) => {
      return <TodoListItem task={task} index={index} />;
    });
    setInputTask(bringTasks);
  }, [inputTask]);

  return (
    <div className="TodoListContainer">
      {inputTask}
      {loading ? (
        todo.map((task, index) => {
          return <TodoListItem task={task} key={index} />;
        })
      ) : (
        // using bars lib to show loading bars
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          visible={true}
        />
      )}
    </div>
  );
}

export default TodoList;
