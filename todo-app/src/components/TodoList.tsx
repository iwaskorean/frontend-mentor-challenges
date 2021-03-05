import React from 'react';
import TodoListItem from './TodoListItem';
import { Todo, ToggleTodo } from './types/types';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};

export default TodoList;
