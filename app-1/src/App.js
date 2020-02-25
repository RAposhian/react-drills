import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    }
  }

  updateChange(val){
    this.setState({ message: val})
  }

  render() {
    return (
      <div className="inputBox">
        <input onChange={ (e) => this.updateChange(e.target.value)}></input>
        <span>{ this.state.message }</span>
      </div>
    )
  }
}

export default App;
