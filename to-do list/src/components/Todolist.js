import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../store';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
