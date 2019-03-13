// Library Code
function generateId() {
  return (
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36)
  );
}

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

// Action types
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

// Action creators
function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

function addGoalAcion(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

// Todos Reducer
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );

    default:
      return state;
  }
}

// Goals Reducer
function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);

    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);

    default:
      return state;
  }
}

// Combines all the reducers and calls whichever is needed
function rootReducer(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  };
}

// Create a variable named store with all the methods in createStore
const store = createStore(rootReducer);

// Runs as a listener as to something happens to the state
store.subscribe(() => {
  console.log("The new state is", store.getState());
});

// Function to add todo by calling addtodoaction action creator
function addTodo() {
  const input = document.getElementById("todo");
  const name = input.value;
  input.value = "";

  store.dispatch(
    addTodoAction({
      name,
      complete: false,
      id: generateId()
    })
  );
}

// Function to add a goal by calling the addgoalaction action creator
function addGoal() {
  const input = document.getElementById("goal");
  const name = input.value;
  input.value = "";

  store.dispatch(
    addGoalAcion({
      name,
      id: generateId()
    })
  );
}

document.getElementById("todoBtn").addEventListener("click", addTodo);

document.getElementById("goalBtn").addEventListener("click", addGoal);

// Dispatches an object to createStore updates the state based on the aciton passed
// store.dispatch(
//   addTodoAction({
//     todo: {
//       id: Math.round(Math.random(1000) * 1000),
//       name: "Learn React Native",
//       complete: false
//     }
//   })
// );

// store.dispatch(
//   addGoalAcion({
//     goal: {
//       id: Math.round(Math.random(1000) * 1000),
//       name: "Learn React Native",
//       complete: true
//     }
//   })
// );
