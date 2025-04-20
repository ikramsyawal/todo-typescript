import { useReducer, useEffect } from "react";
import { Todos, Todo, Action } from "../types";
import { TodosContext } from "../context/TodosContext";

const initialState: Todos = [];

function reducer(state: Todos, action: Action) {
  switch (action.type) {
    case "ADD":
      return [...state, newTodo(action.payload.text)];
    case "TOGGLE":
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

function newTodo(text: string): Todo {
  return {
    id: Date.now() + Math.random(),
    text: text,
    completed: false,
    createdAt: new Date(),
  };
}

export default function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, getInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  function getInitialTodos() {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  }

  return <TodosContext.Provider value={{ state, dispatch }}>{children}</TodosContext.Provider>;
}
