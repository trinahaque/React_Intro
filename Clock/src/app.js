import React from 'react';
import Clock from "./Components/Clock/Clock.js";


class App extends React.Component{
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
