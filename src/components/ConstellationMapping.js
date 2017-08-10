import React, { Component } from 'react';
import $ from 'jquery';
import './../App.css';
import constMap from './../images/Layer 0.png';

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
      <div>
      <div className="constellationMapping">
        <img className='constMap Layer_0 ' src={constMap} />
        <div  id='l1' className='Layer_1'></div>
        <div  id='l10' className='Layer_10  ' >
          
        </div>
        <div  id='l3' className='Layer_3'></div>
        <div  id='l4' className='Layer_4'></div>
        <div  id='l5' className='Layer_5'></div>
        <div  id='l6' className='Layer_6'></div>
        <div  id='l7' className='Layer_7'></div>
        <div  id='l8' className='Layer_8'></div>
        <div  id='l9' className='Layer_9'></div>
        <div  id='l22' className='Layer_11'></div>
        <div  id='l2' className='Layer_2'></div>
        <div className='Layer_12'></div>
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
    );
  }
}

export default ConstellationMapping;