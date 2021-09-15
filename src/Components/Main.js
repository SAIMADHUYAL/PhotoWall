import React, {Component} from 'react';
import List from './List';
import Title from './Title';

//React Components.
//create a class.
//We can create each element as a Component and combine all of them in single Main component to render 


// We can render the Component any number of times inside another component.
class Main extends Component{
    render(){
      return(
        <div>
          <Title title = {'ToDos'}/>
          <List tasks = {['Mow the lawn','Walk the Dog']}/>
          <List tasks = {['hose the driveway','finish the laundry']}/>
        </div>
      )
    }
  }

  export default Main;