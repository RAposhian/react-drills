import React, {Component} from 'react';

class NewTask extends Component {
   constructor (props) {
      super(props);

      this.state= {
         input: ''
      }
      this.handleAdd = this.handleAdd.bind(this);

   };
   handleInputChange(val) {
      this.setState({input: val})
   }

   handleAdd() {
      this.props.add(this.state.input);
      this.setState({input: ''})
   }
   render() {
      return (
         <div>
            <div className="inputBox">
               <input 
                  value ={this.state.input}
                  placeholder ="Enter a task"
                  onChange={ e => this.handleInputChange(e.target.value)}/>
               <button onClick={this.handleAdd}>Add</button>
            </div>
         </div>
      )
   }
}

export default NewTask;