import React, { Component } from 'react';

import './../DontTouch.css';
import Nav from './Nav.js';

class AllTheConstellations extends Component {

  
  

  render() {
    return (
      <div className="star-cont"> 
        
        <span className="zodiac-title">ZODIAC CONSTELLATIONS</span>
        
      <div className="stars">
        <div className="stars2"></div>
      <div className="twinkling">
        <div className='center-items'>
        <div className='mainMap' > 
        <div  id='Aries' className='Leo2'></div>
        <div  id='Taurus' className='Cancer2' ></div>
        <div  id='Gemini' className='Gemini2'></div>
        <div  id='Cancer' className='Taurus2'></div>
        <div  id='Leo' className='Orion'></div>
        <div  id='Virgo' className='Canis_Minor'></div>
        <div  id='Libra' className='Canis_Major'></div>
        <div  id='Scorpio' className='Columba'></div>
        <div  id='Sagittarius' className='Eredanus'></div>
        <div  id='Capricorn' className='Celus'></div>
        <div  id='Aquarius' className='Pegasus'></div>
        <div id='Pisces' className='Cassiopeia'></div>
        <div id='Pisces' className='Cycnus'></div>
        <div id='Pisces' className='Draco'></div>
        <div id='Pisces' className='Herculese'></div>
        <div id='Pisces' className='Pisces2'></div>
        <div id='Pisces' className='Scopius'></div>
        <div id='Pisces' className='Libra2'></div>
        <div id='Pisces' className='Corvus'></div>
        <div id='Pisces' className='Lupus'></div>
        <div id='Pisces' className='Virgo2'></div>
        <div id='Pisces' className='Hydra'></div>
        </div>
      <div className='display_Box'>
        <div className='info_Box'> 
            <img src="https://www.horoscopedates.com/img/icon_aries.png" alt=""/>
            <h1>ARIES</h1>
            <span> 21 March – 20 That temperamental trait of individuals born with the Sun in the element of Fire is best seen in a young Aries. They are dynamic and full of energy, often forgetting to slow down, look into the past for some answers and learn from their experiences. Filled with enthusiasm and childish, an Aries is a true leader that will be able to spark your inner fire in no time. When active enough and focused on ways to focus their energy on their true goals, these people are representatives of Fire in its purest and controlled form. </span>

        </div>
      </div>
       
      </div>
      </div>
      </div>
      <Nav />
      </div>
      
      
      
      
    );
  }
}

export default AllTheConstellations;