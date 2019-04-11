import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from "./components/plots";
import NavBar from "./components/navbar";

class App extends React.Component {
  render() {
    return (
      <div>
         <NavBar/>
        <Plot/> 
       
      </div>
      
    );
  }
}

export default App;
