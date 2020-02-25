import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      foods: ["food1", 'food2', 'food3', 'food4']
    }
  }
  render() {
  let foodsToDisplay = this.state.foods.map((e, i) => <h2 key = {i} >{e}</h2>)
    return(
    <div className="food">{foodsToDisplay}</div>
    )
  }
}

export default App;
