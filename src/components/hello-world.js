import React, { Component } from 'react';

// Functional Component
function HelloWorld(props) {
    return (
      <div className="solidBorder">
        <h1> Hello World </h1>
        <h3> Hello {props.name} </h3>
      </div>
    );

}

export default HelloWorld;
