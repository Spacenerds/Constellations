import React, { Component } from 'react';
import $ from 'jquery';
import './../App.css';


$(document).ready(function() {
$("div.Layer_10").on("click", function(){
  $("span.toggled_10").toggleClass("toggle_off");
  
});

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
})
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
      <div id="t1" className='display_Box'>
      <span id="spanid" className='toggled_1'>  HELLO I AM WORKINGGG </span>
      </div>
      <span id="spanid" className='toggled_2'>  HELLO I AM WORKINGGG </span>
      <span id="spanid" className='toggled_3'>  HELLO I AM WORKINGGG </span>
      <span id="spanid" className='toggled_4'>  HELLO I AM WORKINGGG </span>
      <span id="spanid" className='toggled_5'>  HELLO I AM WORKINGGG </span>
      <span id="spanid" className='toggled_6'>  HELLO I AM WORKINGGG </span>
      <span id="spanid" className='toggled_7'>  HELLO I AM WORKINGGG </span>
      <span id="spanid" className='toggled_8'>  HELLO I AM WORKINGGG </span>
      <span id="spanid" className='toggled_9'>  HELLO I AM WORKINGGG </span>
      <span id="spanid" className='toggled_10'>  HELLO I AM WORKINGGG </span>
      <span id="spanid" className='toggled_11'>  HELLO I AM WORKINGGG </span>
      <span id="spanid" className='toggled_12'>  HELLO I AM WORKINGGG </span> 
      </div>
      </div>
      </div>
      
      
    );
  }
}

export default ConstellationMapping;