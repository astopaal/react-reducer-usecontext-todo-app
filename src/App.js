import React, { useState, useEffect, useRef } from "react";
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [todos]);
  
  const handleSubmit = (event) => {
    console.log(content)
    event.preventDefault();

    if(!content && content.length < 1 ) return;

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
        placeholder="enter something to do..."
          className="todo-input"
          type="text"
          onChange={(event => setContent(event.target.value))}
          value={content}
          ref={inputRef}
        />
        <button className="todo-button" type="submit">
          Add
        </button>
      </form>


      {/* todo list */}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
