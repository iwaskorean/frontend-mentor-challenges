export type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

export type ToggleTodo = (selected: Todo) => void;

export type AddTodo = (newTodo: string) => void;

export type RemoveTodo = (selected: Todo) => void;

export type ClearComplete = () => void;

export type Filter = {
  active: boolean;
  completed: boolean;
};
