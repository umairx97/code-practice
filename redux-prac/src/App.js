import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addTodo, removeTodo, toggleTodo, addTodoAsync } from "./actions";

class App extends Component {
  state = {
    todo: ""
  };

  handleSubmit = event => {
    const { todo } = this.state;
    this.props.addTodoAsync(todo);
    this.setState({
      todo: ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add Todo App</h1>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Click me</button>

        <ul>
          {this.props.todo.map(item => (
            <li key={item.id}>
              {item.name}
              {item.completed}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todos_reducer.Todos
  };
};
export default connect(
  mapStateToProps,
  { addTodo, removeTodo, toggleTodo, addTodoAsync }
)(App);
