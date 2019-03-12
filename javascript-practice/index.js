// Library Code

function createStore(reducer) {
  // The State should have four parts

  // 1. The State
  // 2. Get the state
  // 3. Listen to changes to the state
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  return {
    getState,
    subscribe,
    dispatch
  };
}

// App Code
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.todo]);

    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );

    default:
      return state;
  }
}

// Create a variable named store with all the methods in createStore
const store = createStore(todos);

// Runs as a listener as to something happens to the state
store.subscribe(() => {
  console.log("The new state is", store.getState());
});

// Dispatches an object to createStore updates the state based on the aciton passed
store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 1,
    name: "Learn Redux",
    complete: false
  }
});
