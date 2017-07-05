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
    const color = this.state.color;
    let button = null;
    console.log("This is", this);
    // if (this.state.counter < 15){
    //   button = <button onClick={(e) => this.buttonClick()}>Click Me</button>
    // }
    // else{
      button = <button onClick={(e) => this.buttonClick()}>Click Me</button>
    // }

    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <div className={this.state.color}>
          {button}
        </div>
        <p>You clicked me {this.state.counter} times</p>
      </div>
    )
  }
}

export default Counter;
