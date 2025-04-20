import { useRef, useState } from "react";
import useTodoProvider from "../context/useTodoProvider";

function TodoInput() {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useTodoProvider();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: { text } });
    setText("");
    inputRef.current?.focus();
  };

  return (
    <form>
      <input ref={inputRef} onChange={(e) => setText(e.target.value)} value={text} type="text" className="border" />
      <button onClick={handleClick} className="bg-blue-500 text-white">
        Add
      </button>
    </form>
  );
}

export default TodoInput;
