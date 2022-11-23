import React from "react";
import "./app.css";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  // Define state using property initializer syntax
  state = {
    counter: 0,
  };
  // Define event handler functions using property initializer syntax
  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };
  render() {
    return (
      <React.Fragment>
        <div>Counter Example</div>
        <h3>{this.state.counter}</h3>
        <button onClick={this.increment}>+</button>
      </React.Fragment>
    );
  }
}
export default App;
