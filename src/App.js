import React, { Component } from 'react';
import './App.css';
import router from './router';

import Home from './components/Home/Home'
import Events from './components/Events/Events'

class App extends Component {

  
  render() {
    return (
      <div >
        {router}
      </div>
    );
  }
}

export default App;
