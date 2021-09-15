import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main';

//const tasks = ['Take out the trash','Walk the Dog','How are you'];
//const element = React.createElement('h1', null, 'Hello world');
// const element = React.createElement('ol',null,
// React.createElement('li',null,'Take out the trash'),
// React.createElement('li',null,'Walk the Dog'),
// React.createElement('li',null,'How are you')
// );

// const element = React.createElement('ol', null, tasks.map((task) => React.createElement('li', null, task)));
// ReactDom.render(element, document.getElementById('root'));



//React Elements.
//For looping into each element in the array we use map().
//Gave key = index for the unique props inside the element.
// const element = 
// <div>
//   <h1>Task List</h1>
//   <button>Click here</button>
//   <ol>
//     { tasks.map((task,index) => <li key = {index}>{task},{index}</li>)}
//   </ol>
// </div>

// //For rendering the element we use ReactDom.render()
// ReactDom.render(element,document.getElementById('root'));



//React Components.
//create a class.
//We can create each element as a Component and combine all of them in single Main component to render 





// We can render the Component any number of times inside another component.

ReactDom.render(<Main/>,document.getElementById('root'));