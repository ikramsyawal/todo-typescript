import { createContext } from "react";
import { TodoContext } from "../types";

export const TodosContext = createContext<TodoContext | undefined>(undefined);
