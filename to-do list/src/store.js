// src/store.js
import { createStore } from 'redux';

// Action Types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// Action Creators
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const removeTodo = (index) => ({ type: REMOVE_TODO, payload: index });

// Initial State
const initialState = {
  todos: [],
};

// Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      const newTodos = state.todos.filter((_, i) => i !== action.payload);
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};

// Create Store
const store = createStore(todoReducer);

export default store;
