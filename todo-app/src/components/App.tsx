import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import {
  AddTodo,
  Todo,
  ToggleTodo,
  RemoveTodo,
  ClearComplete,
  ToggleTheme,
} from './types/types';

// scss
import '../scss/main.scss';

const initialTodos: Array<Todo> = [
  {
    id: 0,
    text: 'Complete JavaScript Course',
    complete: true,
  },
  {
    id: 1,
    text: 'Jog around the park 3x',
    complete: false,
  },
  {
    id: 2,
    text: 'Read a book for an hour',
    complete: false,
  },
  {
    id: 3,
    text: 'Complete Todo App on Frontend Mentor',
    complete: false,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [theme, setTheme] = useState(false);

  const toggleTheme: ToggleTheme = () => {
    setTheme(!theme);
  };

  const toggleTodo: ToggleTodo = (selected) => {
    const newTodo = todos.map((todo) => {
      return todo === selected ? { ...todo, complete: !todo.complete } : todo;
    });
    setTodos(newTodo);
  };

  const addTodo: AddTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: newTodo,
        complete: false,
      },
    ]);
  };

  const removeTodo: RemoveTodo = (selected) => {
    const newTodo = todos.filter((todo) => {
      return todo !== selected && { ...todo };
    });
    setTodos(newTodo);
  };

  const clearComplete: ClearComplete = () => {
    const newTodo = todos.filter((todo) => {
      return !todo.complete && { ...todo };
    });
    setTodos(newTodo);
  };

  return (
    // <div className="wrapper">
    <div className={`wrapper ${theme && 'dark'}`}>
      <div className="container">
        <Header addTodo={addTodo} theme={theme} toggleTheme={toggleTheme} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          clearComplete={clearComplete}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default App;
