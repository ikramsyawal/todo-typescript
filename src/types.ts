export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
};

export type Todos = Todo[];

export type Action =
  | { type: "ADD"; payload: { text: string } }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "TOGGLE"; payload: { id: number } };

export type TodoContext = {
  state: Todos;
  dispatch: React.Dispatch<Action>;
};
