import React, {Component} from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      listItems: [],
      userInput: ''
    }
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleChange(val) {
    this.setState({ userInput: val})
  }

  handleAddItem(){
    this.setState({
      listItems: [...this.state.listItems, this.state.userInput],
      userInput: ''
    })
  }
  render(){
    let listItems = this.state.listItems.map((e, i) => <Todo key={i} task={e} />)
    
    return (
      <div className='App'>
        <span>My to-do list:</span>
        <div>
          <input placeholder="Enter list Item" onChange={(e) => this.handleChange(e.target.value)} value={this.state.userInput}></input>
          <button onClick={this.handleAddItem}>Add</button>
        </div>
        <br/>
        {listItems}
      </div>
    )
  }
}

export default App;
