import React from 'react';
import Clock from "./components/Clock/Clock.js";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {showClock: true}
  }

  showClock = () => {
    this.setState({showClock: true});
  }

  removeClock = () => {
    this.setState({showClock: false});
  }

  render(){
    if (this.state.showClock){
      return (
        <div>
          <Clock/>
          <button onClick={() => this.removeClock()}>Remove Clock</button>
        </div>
      )
    }
    else {
      return (
        <div>
          <Clock displayMethod={this.showClock}/>
        </div>
      )
    }

  }
}
export default App;
