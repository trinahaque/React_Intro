import React from 'react';
import Life from "./Components/Life/Life.js";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {showCountDown: true};
  }

  removeCountDown = () => {
    this.setState({showCountDown: false});
  }
  render(){
    if (this.state.showCountDown){
      return (
        <Life destroyMethod={this.removeCountDown}/>
      )
    } else{
        return (
          <h1>Crisis Averted </h1>
        )
    }
  }
}

export default App;
