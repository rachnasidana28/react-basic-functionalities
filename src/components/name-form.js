import React from 'react';

export default class NameForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {inputValue: ''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(event){
    this.setState({inputValue: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    alert(" Hi, The form has been submitted by " + this.state.inputValue);
  }


  render(){
    return(
      <div className="solidBorder" onSubmit={this.onFormSubmit}>
        <form >
          <label>
            <h3>Name:&nbsp;
            <input type="text" value={this.state.inputValue} onChange={this.onNameChange}/></h3>
          </label>
          <input className ="btn btn-primary solidBorder" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
