import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from "./components/plots";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <div>
         <NavBar/>
        <Plot/> 
        <Footer/>
       
      </div>
      
    );
  }
}

export default App;
