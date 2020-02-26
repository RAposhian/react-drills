import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      food: ['ice Cream', 'pasta', 'sandwich', 'beer'],
      filterStr: ''
    }
  }

  updateChange(val){
    this.setState({ filterStr: val })
  }



  render(){
    let displayText = this.state.food
    .filter((e, i) => e.includes(this.state.filterStr))
  .map((e, i) => <h2 key ={i} >{e}</h2>)
    return (
      <div className="listBox">
        <input onChange={ (e) => this.updateChange(e.target.value)}></input>
        <div className="outPutBox">{displayText} </div>
      </div>
    )
  }
}


export default App;
