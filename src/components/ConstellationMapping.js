import React, { Component } from 'react';

import './../App.css';
import constellationMap from './../images/c6FUJS.jpg'


class ConstellationMapping extends Component {

  

  render() {
    return (
      <div className="constellationMapping">
        <img className='constMap' src={constellationMap} />
      </div>
    );
  }
}

export default ConstellationMapping;