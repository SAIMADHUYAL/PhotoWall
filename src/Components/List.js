import React, {Component} from 'react';


//React Components.
//create a class.
//We can create each element as a Component and combine all of them in single Main component to render 

class List extends Component{

    render(){
      return(
        <ul>
          { this.props.tasks.map((task,index) => <li key = {index}>{task}</li>)}
        </ul>
      );
    }
}

export default List;