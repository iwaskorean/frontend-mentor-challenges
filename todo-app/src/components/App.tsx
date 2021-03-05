import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import { AddTodo, Todo, ToggleTodo } from './types/types';

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

  const toggleTodo: ToggleTodo = (selected) => {
    const newTodo = todos.map((todo) => {
      if (todo === selected) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
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

  return (
    <div className="wrapper">
      <div className="container">
        <TodoHeader addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default App;
