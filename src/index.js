import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world';
import ListComponent from './components/list-component';
import Clock from './components/clock';
import ToggleButton from './components/toggle';
import NameForm from './components/name-form';
import DropDownForm from './components/dropdown-form';
import TempCalc from './components/lift-state-up';

const numbers= [1,2,3,4,5,6];

ReactDOM.render(<HelloWorld name="Rachna"/>, document.getElementById('HelloWorld'));
ReactDOM.render(<ListComponent items={numbers}/>, document.querySelector('.ListComponent'));
ReactDOM.render(< Clock />, document.querySelector('.Clock'));
ReactDOM.render(< ToggleButton />, document.querySelector('.ToggleButton'));
ReactDOM.render(< NameForm />, document.querySelector('.NameForm'));
ReactDOM.render(< DropDownForm />, document.querySelector('.DropDownForm'));
ReactDOM.render(<TempCalc />, document.querySelector('.FeverCalculator'));
