import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from "./components/plots";

class App extends React.Component {
  render() {
    return (
      <div>
        <Plot/> 
      </div>
      
    );
  }
}

export default App;
