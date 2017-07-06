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
  componentWillUnmount(){
    console.log("7. this runs right before the component is removed from the DOM");
    document.body.removeChile(this.h1);
  }

  componentWillUpdate(nextProps, nextState){
    console.log("4. this runs right before the html is re-rendered, in this case right before state changes");
    if (this.stateCount == 2){
      this.renderOrder = 5;
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log("6. this runs right before the html is re-rendered, in this case right after state changes");
    if (this.renderOrder <= 0 && prevState.count > 0){
      clearInterval(this.countDown);
      console.log("7. Countdown finished. State interval has been stopped.")
      this.h1 = document.createElement('h1');
      this.h1.innerText = "making a mess";
      document.body.appendChild(this.h1);
      setTimeout(() => {
        console.log("invoking this.props.destroyMethod()")
        this.props.destroyMethod();
      }, 3000)
    }
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
