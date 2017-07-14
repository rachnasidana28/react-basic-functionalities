import React from 'react';

export default class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};
    this.handleClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(){
    this.setState(prevState => ({
      isToggleOn : !prevState.isToggleOn
    }));
  }

  render(){
    return(
      <div lassName="dashedBorder">
        <button className="dashedBorder btn btn-primary" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>

    );

  }

}
