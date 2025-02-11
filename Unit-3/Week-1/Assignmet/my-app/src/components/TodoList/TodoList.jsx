import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, status: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodoStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
    return (
        <div>
            <h1 className='heading'>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <div className='todolist-cont'>
      <ul className='todolist'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleStatus={toggleTodoStatus}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      </div>
      
        </div>
    );
}

export default TodoList;
