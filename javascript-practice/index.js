// Library Code
function generateId() {
  return (
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36)
  );
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

// Create a variable named store with all the methods in createStore
const store = Redux.createStore(
  Redux.combineReducers({
    todos,
    goals
  })
);

// Runs as a listener as to something happens to the state
store.subscribe(() => {
  const { goals, todos } = store.getState();

  document.getElementById("goals").innerHTML = "";
  document.getElementById("todos").innerHTML = "";

  goals.forEach(addGoalToDom);
  todos.forEach(addTodoToDom);
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

// DOM Code
document.getElementById("todoBtn").addEventListener("click", addTodo);
document.getElementById("goalBtn").addEventListener("click", addGoal);

function createRemoveButton(onClick) {
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "X";

  removeBtn.addEventListener("click", onClick);

  return removeBtn;
}

function addTodoToDom(todo) {
  const node = document.createElement("li");
  const text = document.createTextNode(todo.name);
  const removeBtn = createRemoveButton(() => {
    store.dispatch(removeTodoAction(todo.id));
  });

  node.appendChild(text);
  node.appendChild(removeBtn);
  node.style.textDecoration = todo.complete ? "line-through" : "none";
  node.addEventListener("click", () => {
    store.dispatch(toggleTodoAction(todo.id));
  });

  document.getElementById("todos").appendChild(node);
}

function addGoalToDom(goal) {
  const removeBtn = createRemoveButton(() => {
    store.dispatch(removeGoalAction(goal.id));
  });

  const node = document.createElement("li");

  const text = document.createTextNode(goal.name);
  node.appendChild(text);
  node.appendChild(removeBtn);

  document.getElementById("goals").append(node);
}
