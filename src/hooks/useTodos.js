import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function readStorage() {
  try {
    const todos = localStorage.getItem("todos");
    return JSON.parse(todos) || [];
  } catch (error) {
    return [];
  }
}

function updateStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function useTodos() {
  const [todos, setTodos] = useState(readStorage);

  useEffect(() => updateStorage(todos), [todos]);

  function add(item) {
    const newTodos = [...todos];

    newTodos.push({ ...item, id: uuid() });

    setTodos(newTodos);
  }

  function remove(id) {
    const newTodos = [...todos];

    setTodos(newTodos.filter((todo) => todo.id !== id));
  }

  return {
    todos,
    add,
    remove,
  };
}
