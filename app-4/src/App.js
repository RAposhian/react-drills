import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      username: '',
      password: ''
    }
  }

  updateUsername(val){
    this.setState({ username: val})
  }

  updatePassword(val){
    this.setState({ password: val})
  }
  
  submit(strOne, strTwo) {
    return alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }
  
  render(){
    
    return(
      <div className="loginBox">
        <input onChange={ (e) => this.updateUsername(e.target.value)} value={this.state.username}></input> 
         <input onChange={ (e) => this.updatePassword(e.target.value)} value ={this.state.password}></input> 
         <button onClick={ () => this.submit()}>Login</button>
      </div>
    )
  }
}


export default App;
