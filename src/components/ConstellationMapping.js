import React, { Component } from 'react';

import './../App.css';


class ConstellationMapping extends Component {

  
  

  render() {
    return (
      <div className="star-cont"> 
        
      <div className="stars">
      <div className="twinkling">
        <div className='Base_Layer ' > 
        <div  id='Aries' className='Aries'></div>
        <div  id='Taurus' className='Taurus' ></div>
        <div  id='Gemini' className='Gemini'></div>
        <div  id='Cancer' className='Cancer'></div>
        <div  id='Leo' className='Leo'></div>
        <div  id='Virgo' className='Virgo'></div>
        <div  id='Libra' className='Libra'></div>
        <div  id='Scorpio' className='Scorpio'></div>
        <div  id='Sagittarius' className='Sagittarius'></div>
        <div  id='Capricorn' className='Capricorn'></div>
        <div  id='Aquarius' className='Aquarius'></div>
        <div id='Pisces' className='Pisces'></div>
        </div>
      <div className='display_Box'>
      
      </div>
       
      </div>
      </div>
      </div>
      
      
    );
  }
}

export default ConstellationMapping;