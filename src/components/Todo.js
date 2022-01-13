import React from "react";

const Todo = ({ inputText, todo, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    console.log("hello");
  };
  const completeHandle = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {inputText}
      </li>
      <button onClick={completeHandle} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
