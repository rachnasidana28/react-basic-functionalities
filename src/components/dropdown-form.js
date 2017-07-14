import React , { Component } from 'react';

export default class DropDownForm extends Component{
  constructor(props){
    super(props);
    this.state = {selectedFruit: 'watermelon'};
    this.onDropDownChange = this.onChange.bind(this);
    this.onFormSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
    this.setState({selectedFruit: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    alert("The form was submitted with fruit as: " + this.state.selectedFruit);
  }

  render(){
    return(
      <div className="dashedBorder">
        <form onSubmit={this.onFormSubmit}>
          <label>
          <h3>Please select a fruit:&nbsp; &nbsp; 
            <select value={this.state.selectedFruit} onChange={this.onDropDownChange}>
              <option value='mango'> Mango</option>
              <option value='orange'> Orange</option>
              <option value='pineapple'> Pineapple</option>
              <option value='watermelon'> Watermelon</option>
              <option value='guava'> Guava</option>
            </select>
            <input type="submit" value="submit" className="btn btn-primary solidBorder"/></h3>
          </label>
       </form>
      </div>
    );
  }
}
