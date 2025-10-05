import React, { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;
    addTodo({
      id: Date.now(),
      todo: todo,       
      completed: false,
    });
    setTodo(""); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 bg-[#2c3e50] rounded-lg p-2"
    >
      <input
        type="text"
        placeholder="Enter your task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)} 
        className="flex-1 p-2 rounded bg-[#34495e] text-white outline-none"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
