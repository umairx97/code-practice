import * as actionTypes from "./types";

export const generateId = () => {
  return Math.round(Math.random(100) * 1000);
};

export const addTodo = todo => {
  return {
    type: actionTypes.ADD_TODO,
    todo: {
      id: generateId(),
      name: todo,
      completed: false
    }
  };
};

export const removeTodo = id => {
  return {
    type: actionTypes.REMOVE_TODO,
    id
  };
};

export const toggleTodo = id => {
  return {
    type: actionTypes.TOGGLE_TODO,
    id
  };
};
