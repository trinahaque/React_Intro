import React from "react";
import "./Clock.css";

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  componentDidMount(){
    this.timerID = setInterval(
      () =>
          this.tick(), 1000
    ); console.log("set interval still running")
  }

  componentWillUnmount(){
    console.log("set interval stopped running")
    clearInterval(this.timerID);
  }

  render(){
    return(
      <div>
        <h1>Hello, world! </h1>
        <h2> It is {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={() => this.componentWillUnmount()}>Remove Clock</button>
      </div>
    )
  }
}

export default Clock;
