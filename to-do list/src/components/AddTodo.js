// src/components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store'; 

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue(''); 
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
