import React, { Component } from 'react';
import $ from 'jquery'
import './../App.css';
import Nav from './Nav';


$("div.Layer_1").on("click", function(){
  $("div.display_Box").toggleClass("toggle_off");
  
});
$("div.Layer_2").on("click", function(){
  $("span.toggled_2").toggleClass("toggle_off");
  
});
$("div.Layer_3").on("click", function(){
  $("span.toggled_3").toggleClass("toggle_off");
  
});
$("div.Layer_4").on("click", function(){
  $("span.toggled_4").toggleClass("toggle_off");
  
});
$("div.Layer_5").on("click", function(){
  $("span.toggled_5").toggleClass("toggle_off");
  
});
$("div.Layer_6").on("click", function(){
  $("span.toggled_6").toggleClass("toggle_off");
  
});
$("div.Layer_7").on("click", function(){
  $("span.toggled_7").toggleClass("toggle_off");
  
});
$("div.Layer_8").on("click", function(){
  $("span.toggled_8").toggleClass("toggle_off");
  
});
$("div.Layer_9").on("click", function(){
  $("span.toggled_9").toggleClass("toggle_off");
  
});
$("div.Layer_11").on("click", function(){
  $("span.toggled_11").toggleClass("toggle_off");
  
});
$("div.Layer_12").on("click", function(){
  $("span.toggled_12").toggleClass("toggle_off");
  
});

class ConstellationMapping extends Component {
  render() {
    return (
      
      <div className="star-cont"> 

        <span className="zodiac-title">ZODIAC CONSTELLATIONS</span>
        

      <div className="stars">
        <div className="stars2"></div>
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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
      <Nav /> 
>>>>>>> Stashed changes
=======
      <Nav /> 
>>>>>>> Stashed changes

        <div className='info_Box'> 
            <img src="https://www.horoscopedates.com/img/icon_aries.png" alt=""/>
            <h1>ARIES</h1>
            <span> 21 March – 20 That temperamental trait of individuals born with the Sun in the element of Fire is best seen in a young Aries. They are dynamic and full of energy, often forgetting to slow down, look into the past for some answers and learn from their experiences. Filled with enthusiasm and childish, an Aries is a true leader that will be able to spark your inner fire in no time. When active enough and focused on ways to focus their energy on their true goals, these people are representatives of Fire in its purest and controlled form. </span>

        </div>

      </div>
      
      </div>
      </div>
      </div>
      
      
      
    );
  }
}

export default ConstellationMapping;