import React, {Component} from 'react';

const temperatureUnits = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tempConverter(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


function HasFever({temperature}){
  if(isNaN(temperature)){
    return <span/>;
  }
  if (temperature >= 37) {
    return <span className="alert alert-danger"> &nbsp; &nbsp; The person has fever.</span>;
  }
  return <span className="alert alert-info"> &nbsp; &nbsp; The person doesnot have fever.</span>;
}

class FeverCalculator extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    const bodyTemperature = this.props.temperature;
    const temperatureUnit = this.props.unit;

    return (
      <div>
        <h3>Enter temperature in {temperatureUnits[temperatureUnit]}: &nbsp;
        <input
          value={bodyTemperature}
          onChange={this.handleChange} /> </h3>
      </div>

    );
  }
}


export default class TempCalc extends Component{


  constructor(props){
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state={temperature:'', unit:'c'}
  }

  handleCelsiusChange(temperature){
    this.setState({unit:'c', temperature});
  }
  handleFahrenheitChange(temperature){
    this.setState({unit:'f', temperature});
  }

  render(){

    const unit = this.state.unit;
    const temperature = this.state.temperature;
    const celsius = unit === 'f' ? tempConverter(temperature, toCelsius) : temperature;
    const fahrenheit = unit === 'c' ? tempConverter(temperature, toFahrenheit) : temperature;


    return(
      <div className="solidBorder">
        <FeverCalculator unit="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}/>
        <FeverCalculator unit="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}/>
        <HasFever temperature={parseFloat(celsius)}/>
      </div>
    );
  }
}
