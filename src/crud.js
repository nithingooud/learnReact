import "./App.css";
import { useState } from "react";

function Crud() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    // const newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList);
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    // const newList = todoList.filter((task) => taskName != task);
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((item) => {
          return (
            <div>
              <h1>{item.taskName}</h1>
              <button onClick={() => deleteTask(item.id)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Crud;
