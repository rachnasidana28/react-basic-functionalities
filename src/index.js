import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world';
import ListComponent from './components/list-component';

const numbers= [1,2,3,4,5,6];

ReactDOM.render(< HelloWorld name="Rachna"/>, document.getElementById('HelloWorld'));
ReactDOM.render( <ListComponent items={numbers}/>, document.querySelector('.ListComponent'));
