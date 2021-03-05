import React from 'react';
import { Todo, ToggleTodo } from './types/types';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li className="item">
      <label>
        <div className="checkbox__container">
          <div className="checkbox">
            <div className="check"></div>
          </div>
        </div>
        <p className="item__text">{todo.text}</p>
        <img className="icon--cross" src="./assets/icon-cross.svg" alt="" />
      </label>
    </li>
  );
};

export default TodoListItem;
