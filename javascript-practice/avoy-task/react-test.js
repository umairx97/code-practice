/*
 * Welcome to the Avoy React Recuiting Test!
 *
 * Please fork this JSFiddle when getting started
 *
 * Please update the below code to render the
 * following questions (QUESTIONS) as well as your
 * Answers to them!
 * Use the existing shell Components as a base for
 * dropping the Questions and Answers into.
 *
 * Feel free to rewrite anything here.
 * Once you have been able to display the Questions
 * and Answers on the UI, please rewrite the:
 * `functionToRewrite` function in ES2017 syntax in
 * the `rewrittenFunctionInES2017`.
 * The function won't do anything as it is 'fake'.
 * Make sure to be conscious of the way JS handles
 * synchrony
 *
 * Remember to document your code!
 */

const QUESTIONS = [
  "Explain your experience with a) ReactJS, b) ReactNative and c) Redux.",
  "Share the link to a React project you have recently worked on or completed.",
  "What is your favorite feature in ES 2017? "
];

// This is a function that you are going to rewrite below
// Note this doesn't work
const functionToReWrite = () => {
  return fetch("myapp/thingy.json")
    .then(res => res.json())
    .then(users => users[0])
    .then(user => fetch("myapp/users/" + user.user_name))
    .then(user => doMyThing(user.json))
    .catch(err => console.log(err));
};

const rewrittenFunctionInES2017 = async () => {
  return await fetch("myapp/thingy.json")
    .then(res => res.json())
    .then(users => users[0])

    .then(async user => await fetch("myapp/users/" + user.user_name))
    .then(user => doMyThing(user.json))
    .catch(err => console.log(err));

  // TODO: Rewrite the above function `functionToReWrite`
  // in ES 2017 notation
  // Make sure you are handling the correct asynchronous/synchronous
  // expected behavior
  // Also explain what you think it is doing along the way
};

class App extends React.Component {
  state = {
    questions: QUESTIONS,
    currentAnswer: "",
    answers: []
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      currentAnswer: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { currentAnswer } = this.state;

    // let answer = this.state.answers.push(currentAnswer);
    this.setState({
      answers: [...this.state.answers, currentAnswer],
      currentAnswer: ""
    });
  };

  generateId = () => {
    return Math.round(Math.random(100) * 1000);
  };
  render() {
    const { questions, answers } = this.state;
    return (
      <div>
        {questions.map(item => (
          <div key={item}>
            <Question
              questions={item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        ))}

        <Answer answers={answers} />
      </div>
    );
  }
}

class Question extends React.Component {
  // TODO: Add a Question Component

  render() {
    const { questions, handleChange, handleSubmit, currentAnswer } = this.props;
    return (
      <div>
        <ul>
          <li>{questions}</li>
          <br />
          <Textarea handleChange={handleChange} handleSubmit={handleSubmit} />
        </ul>
      </div>
    );
  }
}

class Textarea extends React.Component {
  // TODO: Add a Textarea Component
  render() {
    const { handleChange, handleSubmit, currentAnswer } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Answer"
          name="answer"
          onChange={handleChange}
        />
        <button type="submit">Submit Answer</button>
      </form>
    );
  }
}

class Answer extends React.Component {
  // TODO: Add an Answer Component

  render() {
    const { answers } = this.props;
    return (
      <div>
        <h1>Your Answers: </h1>

        {answers.map(answer => (
          <ul>
            <li>{answer}</li>
          </ul>
        ))}
      </div>
    );
  }
}

class AvoyTest extends React.Component {
  // TODO: Add the root Component
  render() {
    return <App />;
  }
}

ReactDOM.render(<AvoyTest />, document.querySelector("#app"));
