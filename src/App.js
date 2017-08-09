import React, { Component } from 'react';
import './App.css';
import router from './router';

import Home from './components/Home/Home'
import ConstellationMapping from './components/ConstellationMapping.js'
import Events from './components/Events/Events'


class App extends Component {

  
  render() {
    return (
      <div >
        <Home/>
          <ConstellationMapping />  
        {router}
      </div>
    );
  }
}

export default App;
