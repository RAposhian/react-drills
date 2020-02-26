import React, { Component } from "react";
import Todo from './Todo';

class List extends Component {
   render() {
      let list = this.props.tasks.map((e, i) => <Todo  key = {i} task = {e}/> )
   return <div>{list}</div>
   }
}

export default List;