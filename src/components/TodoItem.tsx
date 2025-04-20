import useTodoProvider from "../context/useTodoProvider";

function TodoItem() {
  const { state, dispatch } = useTodoProvider();
  return (
    <ul>
      {state.map((todo) => (
        <li key={todo.id} className="flex justify-between">
          <div>
            <p className={todo.completed ? "line-through text-slate-400" : ""}>{todo.text}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => dispatch({ type: "TOGGLE", payload: { id: todo.id } })}>Toggle</button>
            <button onClick={() => dispatch({ type: "DELETE", payload: { id: todo.id } })}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;
