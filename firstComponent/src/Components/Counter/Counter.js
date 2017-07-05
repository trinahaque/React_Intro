import React from "react"
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter:0};
  }
  buttonClick(counter){
    this.setState({counter: this.state.counter + 1});
  }
  render(){
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <button onClick={() => this.buttonClick()}>Click Me</button>
        <p>You clicked me {this.state.counter} times</p>
      </div>
    )
  }
}

export default Counter;
