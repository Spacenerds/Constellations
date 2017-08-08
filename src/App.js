import React, { Component } from 'react';

import './App.css';

import Home from './components/Home/Home'
import ConstellationMapping from './components/ConstellationMapping.js'

class App extends Component {
  render() {
    return (
      <div >
        <Home/>
         <ConstellationMapping /> 
      </div>
    );
  }
}

export default App;
