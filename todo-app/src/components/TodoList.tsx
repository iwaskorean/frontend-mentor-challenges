import React, { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem';
import { ClearComplete, RemoveTodo, Todo, ToggleTodo } from './types/types';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
  clearComplete: ClearComplete;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  removeTodo,
  clearComplete,
}) => {
  const [filter, setFilter] = useState({
    active: false,
    completed: false,
  });

  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    let count = 0;
    todos.map((todo) => {
      if (!todo.complete) {
        count++;
      }
      return count;
    });

    setActiveCount(count);
  }, [todos]);

  return (
    <div className="list__container">
      <div className="list">
        <ul>
          {todos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                filter={filter}
              />
            );
          })}
        </ul>
      </div>
      {todos.length > 0 && (
        <div className="list__navs">
          <p className="list__navs__count">
            {activeCount} {activeCount === 1 ? 'item left' : 'items left'}
          </p>
          <div className="list__navs__filter">
            <p
              className={`nav ${
                !filter.active && !filter.completed && 'active'
              }`}
              onClick={() => setFilter({ active: false, completed: false })}
            >
              All
            </p>
            <p
              className={`nav ${filter.active && 'active'}`}
              onClick={() => setFilter({ active: true, completed: false })}
            >
              Active
            </p>
            <p
              className={`nav ${filter.completed && 'active'}`}
              onClick={() => setFilter({ active: false, completed: true })}
            >
              Completed
            </p>
          </div>
          <p className="nav" onClick={() => clearComplete()}>
            Clear Complete
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
