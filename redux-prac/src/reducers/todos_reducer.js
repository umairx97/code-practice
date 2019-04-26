import * as actionTypes from "../actions/types";

const initialTodoState = {
  Todos: []
};
export const todos_reducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, Todos: state.Todos.concat(action.todo) };

    case actionTypes.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );

    default:
      return state;
  }
};
