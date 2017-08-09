import React, { Component } from 'react';

import './../App.css';
import constMap from './../images/Layer 0.png';


class ConstellationMapping extends Component {

  

  render() {
    return (
      <div className="constellationMapping">
        <img className='constMap Layer_0 ' src={constMap} />
        <div className='Layer_1'></div>
        <div className='Layer_2'></div>
        <div className='Layer_3'></div>
        <div className='Layer_4'></div>
        <div className='Layer_5'></div>
        <div className='Layer_6'></div>
        <div className='Layer_7'></div>
        <div className='Layer_8'></div>
        <div className='Layer_9'></div>
        <div className='Layer_10'></div>
        <div className='Layer_11'></div>
        <div className='Layer_12'></div>
      </div>
    );
  }
}

export default ConstellationMapping;