import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from './components/Nav'


import router from './router';


class App extends Component {

  
  render() {
    return (
      <div >
        <Nav />
        {router}
      </div>

    );
  }
}

const styles = {
  menuStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroud:"black"
  }
}

export default App;
