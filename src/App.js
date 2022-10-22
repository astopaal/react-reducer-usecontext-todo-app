import React, { useState } from "react";
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    console.log(content)
    event.preventDefault();

    if(!content) return;

    const newTodo = {
      id: Date.now(),
      content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent("");

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          className="todo-input"
          type="text"
          onChange={(event => setContent(event.target.value))}
          value={content}
        />
        <button className="todo-button" type="submit">
          Ekle
        </button>
      </form>


      {/* todo list */}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
