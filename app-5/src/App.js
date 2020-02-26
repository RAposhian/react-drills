import React, {Component} from 'react';
import logo from "./logo.svg"
import './App.css';
import Image from "./Image"

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Image url={"http://www.public-domain-photos.com/free-stock-photos-1-big/objects/metallic-part-13.jpg"}/>
      </div>
    )
  }
}

export default App;
