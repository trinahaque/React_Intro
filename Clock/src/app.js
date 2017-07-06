import React from 'react';
import Clock from "./Components/Clock/Clock.js";


class App extends React.Component{

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

  render(){
    return(
      <div>
        <Clock/>
        <button onClick={() => this.componentDidMount()}>Add Clock</button>
      </div>
    )
  }
}
export default App;
