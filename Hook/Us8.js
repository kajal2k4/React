// Task-8

// Write a program to build React app for task todo list.

// Add 1 input field and button and by clicking on button display entered task on the same page.

// Also, add delete button with each added task to delete the task.

import React, { useState } from "react";

export default function Us8() {
  const [Task, setTask] = useState(" ");
  const [Todo, setTodo] = useState([]);

  function hc(e) {
    setTask(e.target.value);
  }
  function addTask() {
    if (!Todo.includes(Task)) {
      setTodo([...Todo, Task]);
    } else {
      alert("Task already added");
    }
  }
  function deleteTask(taskname) {
    setTodo([
      Todo.filter((task) => {
        if (task !== taskname) {
          return true;
        } else {
          return false;
        }
      }),
    ]);
  }

  return (
    <>
      <div>
        <input onChange={hc} />
        <button onClick={addTask}>Add Task</button>
        {
            Todo.map((task)=>{
                return(
                    <>
                    <h1>{task}</h1>
                    <button onClick={()=>deleteTask(task)}>Delete</button>
                    </>
                )
            })
        }
      </div>
    </>
  );
}
