import React from "react"
import "./Form.css";

class Form extends React.Component{

  constructor(props){
    super(props);
    this.state = {name: '', course: '', rating: '', comment: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   this.setState({name: event.target.name}, {course: event.target.course}, {rating: event.target.rating}, {comment: event.target.comment});
  }

  handleSubmit(event) {
     alert('A name was submitted: ' + this.state.value);
     event.preventDefault();
   }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <p> Name: <input type="text" value={this.state.value} onChange={this.handleChange} /></p>
        <p>
          Course:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="backbone">Backbone</option>
          </select>
        </p>
        <p>
          Rating:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="three">3</option>
            <option value="two">2</option>
            <option value="one">1</option>
          </select>
        </p>
        <p>Comment:</p>
        <p>
         <textarea value={this.state.value} onChange={this.handleChange} />
       </p>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
