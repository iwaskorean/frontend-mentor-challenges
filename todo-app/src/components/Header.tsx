import React, { useState } from 'react';
import { AddTodo, ToggleTheme } from './types/types';
// scss

interface AddTodoProps {
  addTodo: AddTodo;
  toggleTheme: ToggleTheme;
  theme: boolean;
}

const TodoHeader: React.FC<AddTodoProps> = ({
  addTodo,
  toggleTheme,
  theme,
}) => {
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
        <img
          className="icon--daypart"
          src={`./assets/icon-${!theme ? 'moon' : 'sun'}.svg`}
          alt=""
          onClick={() => toggleTheme()}
        />
      </div>
      <form className="header__form" onSubmit={(e) => onSubmit(e)}>
        <div className={`checkbox__container ${theme && 'dark'}`}>
          <div className="checkbox">
            <div className="check"></div>
          </div>
        </div>
        <input
          className={`input ${theme && 'dark'}`}
          type="text"
          value={newTodo}
          placeholder="Create a new to do ..."
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoHeader;
