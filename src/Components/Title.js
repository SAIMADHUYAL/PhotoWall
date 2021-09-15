import React, {Component} from 'react';

//React Components.
//create a class.
//We can create each element as a Component and combine all of them in single Main component to render 


class Title extends Component{
    render(){
      return(
        <h1>{this.props.title}</h1>
      )
    }
  }

  export default Title;