import TodoProvider from "./components/TodoProvider";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <TodoProvider>
      <div className="container mx-auto">
        <TodoInput />
        <TodoItem />
      </div>
    </TodoProvider>
  );
}

export default App;
