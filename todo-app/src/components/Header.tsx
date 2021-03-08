import React, { useState } from 'react';
import { AddTodo } from './types/types';
// scss

interface AddTodoProps {
  addTodo: AddTodo;
}

const TodoHeader: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      return;
    }
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div className="header">
      <div className="header__heading">
        <p>Todo</p>
        <img className="icon--daypart" src="./assets/icon-moon.svg" alt="" />
      </div>
      <form className="header__form" onSubmit={(e) => onSubmit(e)}>
        <div className="checkbox__container">
          <div className="checkbox">
            <div className="check"></div>
          </div>
        </div>
        <input
          className="input"
          type="text"
          value={newTodo}
          placeholder="Enter new things to do ..."
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoHeader;
