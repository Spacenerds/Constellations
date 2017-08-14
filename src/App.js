import React, { Component } from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import {Link} from 'react-router-dom';
>>>>>>> Stashed changes
=======
import {Link} from 'react-router-dom';
>>>>>>> Stashed changes
import Nav from './components/Nav'


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
