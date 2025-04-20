import { useContext } from "react";
import { TodosContext } from "./TodosContext";

export default function useTodoProvider() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodoProvider must be used within a TodoProvider");
  }
  return context;
}
