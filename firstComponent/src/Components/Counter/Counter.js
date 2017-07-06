import React from "react"
import "./Counter.css";

class Counter extends React.Component{

  constructor(props){
    super(props);
    this.state = {color: "green", counter:0};
  }


  buttonClick(counter){
    this.setState({counter: this.state.counter + 1});
    if (this.state.counter == 15){
      this.setState({color: "red"})
    }
  }

  render(){
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <div className={this.state.color}>
          <button onClick={() => this.buttonClick()}>Click Me</button>
        </div>
        <p>You clicked me {this.state.counter} times</p>
      </div>
    )
  }
}

export default Counter;
