import React from 'react';
import { Todo, ToggleTodo, RemoveTodo, Filter } from './types/types';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
  filter: Filter;
  theme: boolean;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
  filter,
  theme,
}) => {
  const renderedItem = (
    <li className={`item ${theme && 'dark'}`}>
      <label>
        <div className={`checkbox__container ${theme && 'dark'}`}>
          <div
            className={todo.complete ? 'checkbox completed' : 'checkbox'}
            onClick={() => toggleTodo(todo)}
          >
            <div
              className={todo.complete ? 'check completed' : 'check'}
              onClick={() => toggleTodo(todo)}
            ></div>
          </div>
        </div>
        <p
          className={todo.complete ? 'item__text completed' : 'item__text'}
          onClick={() => toggleTodo(todo)}
        >
          {todo.text}
        </p>
        <img
          className="icon--cross"
          src="./assets/icon-cross.svg"
          alt=""
          onClick={() => removeTodo(todo)}
        />
      </label>
    </li>
  );

  const filteredItem = () => {
    if (filter.active) {
      return !todo.complete && renderedItem;
    } else if (filter.completed) {
      return todo.complete && renderedItem;
    }

    return renderedItem;
  };

  return <>{filteredItem()}</>;
};

export default TodoListItem;
