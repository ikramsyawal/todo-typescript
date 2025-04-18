import { useReducer, useState, MouseEvent, useEffect, useRef } from "react";
import { Todo, Todos, Action } from "./types";

function reducer(state: Todos, action: Action) {
  switch (action.type) {
    case "ADD":
      return [...state, newTodo(action.payload.text)];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
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

const initialState: Todos = [];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, getInitialTodos);
  const [text, setText] = useState("");

  function handleAdd(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!text) return;
    dispatch({ type: "ADD", payload: { text: text } });
    setText("");
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  function getInitialTodos() {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  }

  useEffect(() => {
    console.log(state, "state changed");
  }, [state]);
  return (
    <div className="p-4">
      <h1>Todo Apps</h1>
      <form>
        <label htmlFor="">Add Todo</label>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className="border-1"
        />
        <button onClick={handleAdd} className="bg-blue-500 border-1">
          Add
        </button>
      </form>
      <p>to do lists</p>
      <ul>
        {state.map((todo: Todo) => (
          <li key={todo.id}>
            <div className="flex justify-between">
              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>
              <div>
                <button
                  onClick={() =>
                    dispatch({ type: "TOGGLE", payload: { id: todo.id } })
                  }
                >
                  Done
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "DELETE",
                      payload: { id: todo.id },
                    })
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
