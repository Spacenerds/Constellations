import React, { Component } from 'react';

import Nav from './components/Nav'
import Sky from './components/Sky'


import './App.css';
import router from './router';


class App extends Component {

  
  render() {
    return (

      <Nav />      

      <div >
        {router}
      </div>

    );
  }
}

export default App;
