import React from "react";
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
        this.timerID = setInterval(()=>
          this.tick(), 1000);
          console.log("set interval still running")
    }

    componentDidUpdate(prevProps, prevState){
        // clearInterval(this.timerID);
        // console.log(this.props.destroyMethod);
        this.props.destroyMethod;
    }

    render(){
      return(
        <div>
          <h1>Hello, world! </h1>
          <h2> It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      )
    }
}
export default Clock;
