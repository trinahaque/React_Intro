import React from 'react';
class Event extends React.Component{
  constructor(props){
    super(props);
    this.name = "Novak Djokovic"
  }
  handleClick(){
    alert("hello", this.name);
  }
  render(){
    return{
      <div>
        <h1>Hello, this is Event component</h1>
        <button onClick={() => this.handleClick()}>Click Me</button>
        // updating the onClick attribute and setting it to be equal to the handleClick method we defined. Now every time the user clicks the button, they will be alerted with a "Hello!" message.
      </div>
    }
  }
}
export default Event;
