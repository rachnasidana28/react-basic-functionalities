import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world';
import ListComponent from './components/list-component';
import Clock from './components/clock';
import ToggleButton from './components/event-handle';
import NameForm from './components/name-form';

const numbers= [1,2,3,4,5,6];

ReactDOM.render(<HelloWorld name="Rachna"/>, document.getElementById('HelloWorld'));
ReactDOM.render(<ListComponent items={numbers}/>, document.querySelector('.ListComponent'));
ReactDOM.render(< Clock />, document.querySelector('.Clock'));
ReactDOM.render(< ToggleButton />, document.querySelector('.ToggleButton'));
ReactDOM.render(< NameForm />, document.querySelector('.NameForm'));
