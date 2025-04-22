import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../todo/todosSlice.js";
import { toggleTheme } from "../theme/themeSlice.js";

function TodoApp() {
  const [text, setText] = useState("");
  // Make sure we're accessing the correct path in the state
  const todos = useSelector((state) => state.todos);
  // This might be the issue - ensure we're accessing theme correctly
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  // For debugging purposes
  console.log("Current theme:", theme);

  return (
     <div className={`flex items-center justify-center min-h-screen transition-colors ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    }`}>
      <div className={`p-8 rounded-lg shadow-md w-full max-w-md transition-colors ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">To-Do List</h1>
          <button
            // Make sure we're using the correct action
            onClick={() => dispatch(toggleTheme())}
            className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter new todo..."
            className={`flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 focus:ring-indigo-400 text-white"
                : "border-gray-300 focus:ring-blue-400"
            }`}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-3 rounded-md transition-colors ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <span
                onClick={() => handleToggleTodo(todo.id)}
                className={`flex-1 cursor-pointer ${
                  todo.completed
                    ? theme === "dark"
                      ? "line-through text-gray-400"
                      : "line-through text-gray-500"
                    : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;