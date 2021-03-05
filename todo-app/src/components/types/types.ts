export type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

export type ToggleTodo = (selected: Todo) => void;

export type AddTodo = (newTodo: string) => void;
