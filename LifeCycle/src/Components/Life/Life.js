import React from "react";
import "./Life.css";

class Life extends React.Component{

  constructor(props){
    super(props);
    this.state = {count: 10};
    this.renderOrder = 2;
    console.log("1. This is the constructor method. Always first");
  }

  componentDidMount(){
    console.log("3. componentDidMount method. Invoked immediately after the first render runs")
    this.countDown = setInterval(()=>{
      this.setState({count: this.state.count - 1})
    }, 1000)
  }

  render(){
    // why does always start with 2?
    console.log(`${this.renderOrder}. This is render method. Invoked after constructor and before state changes`);
    return (
      <h1>Count: {this.state.count}</h1>
    )
  }
}

export default Life;
