import React from 'react';

export default class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state={date: new Date()};
  }

  componentDidMount() {
    this.timerId = setInterval(
      ()=>this.tick(), 1000
    );

  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render(){
    return(
      <h1 className="solidBorder"> It is {this.state.date.toLocaleTimeString()}.</h1>
    );
  }
}
