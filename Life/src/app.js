import React from 'react';
import Life from "./components/Life/Life.js";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {showCountDown: true}
    }
    removeCountDown = () => {
        this.setState({showCountDown: false});
    }

    componentWillUnmount(){
        console.log("7. This runs right before the component is removed from the DOM");
        document.body.removeChild(this.h1)
    }

    render(){
        if(this.state.showCountDown){
            return (
                <Life destroyMethod={this.removeCountDown}/>
            )
        } else {
            return (
                <h1>Crisis Averted</h1>
            )
        }
    }
}
export default App;
