import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Boxes from "./boxes";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      completed: [],
      completedString: ""
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    var completed = e.currentTarget.value
    console.log(`onclick.. e.target.value: ${e.currentTarget.value}. completed: ${this.state.completed} || string: ${this.state.completedString}`)
    this.setState({completed: [...this.state.completed, completed]}, () => {
      this.setState({completedString: this.state.completed.join(", ")},
  () => {console.log(`state set. completed: ${this.state.completed} || string: ${this.state.completedString}`)})
})}




  render() {
  return (
    <div className="App">
      <header className="App-header">Daily Accomplishments</header>
        <div className="App-body">
        <h4>What have you accomlished today?</h4>
        <Boxes onClick={this.onClick}/>
        {this.state.completedString === "" ? null :
          <div className="completed">
            <h3>You've completed {this.state.completed.length} tasks today, keep it up!</h3>
            <p>{this.state.completedString}</p>
          </div>}
        </div>
    </div>
  );
}
}

export default App;
