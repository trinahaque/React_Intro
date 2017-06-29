import React from 'react';
import Prop from "./Components/Prop/Prop.js";
let user = {first_name: "Jen", last_name: "Arbaugh", age:20}

class App extends React.Component{
  render(){
    return(
      <Prop user={user}/>
    )
  }
}

export default App;
