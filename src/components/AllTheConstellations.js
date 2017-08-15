import React, { Component } from 'react';
import axios from 'axios';
import './../DontTouch.css';
import Nav from './Nav.js';

class AllTheConstellations extends Component {

  
  
  constructor() {
    super();

    this.state = {
      results: ''
    }
    this.getconstel = this.getconstel.bind(this);
  }

  componentDidMount(){
    this.getconstel(1);
  }
  
  getconstel(num){
    axios.get(`api/constellations/${num}`).then((response) => {
      console.log(response)
      this.setState({
        results: response.data[0]
      })
    });
  }
  

  render() {
    return (
      <div className="star-cont"> 
        
        <span className="zodiac-title">CONSTELLATIONS</span>
        
      <div className="stars">
        <div className="stars2"></div>
      <div className="twinkling">
        <div className='display_Box2'>
        <div className='mainMap' > 
        <div className="const-cont">
        <div  onClick={() => this.getconstel(1)} className='Perseus'></div>
        <div  onClick={() => this.getconstel(2)} className='Ursa_Major' ></div>
        <div  onClick={() => this.getconstel(3)} className='Pegasus'></div>
        <div  onClick={() => this.getconstel(4)} className='Hercules'></div>
        <div  onClick={() => this.getconstel(5)} className='Cassiopeia'></div>
        <div  onClick={() => this.getconstel(6)} className='Canis_Major'></div>
        <div  onClick={() => this.getconstel(7)} className='Gemini2'></div>
        <div  onClick={() => this.getconstel(8)} className='Orion'></div>
        <div  onClick={() => this.getconstel(9)} className='Pisces2'></div>
        <div  onClick={() => this.getconstel(10)} className='Scorpius'></div>
        <div  onClick={() => this.getconstel(11)} className='Taurus2'></div>
        <div  onClick={() => this.getconstel(12)} className='Ursa_Major'></div>
        <div  onClick={() => this.getconstel(13)} className='Columba'></div>
        <div  onClick={() => this.getconstel(14)} className='Eridanus'></div>
        <div  onClick={() => this.getconstel(15)} className='Cetus'></div>
        <div  onClick={() => this.getconstel(16)} className='Cygnus'></div>
        <div  onClick={() => this.getconstel(17)} className='Draco'></div>
        <div  onClick={() => this.getconstel(18)} className='Libra2'></div>
        <div  onClick={() => this.getconstel(19)} className='Corvus'></div>
        <div  onClick={() => this.getconstel(20)} className='Lupus'></div>
        <div  onClick={() => this.getconstel(21)} className='Leo_Minor'></div>
        <div  onClick={() => this.getconstel(22)} className='Leo2'></div>
        <div  onClick={() => this.getconstel(23)} className='Hydra'></div>
        <div  onClick={() => this.getconstel(24)} className='Virgo2'></div>
        <div className='Canis_Minor'>   </div>
        </div>
        </div>
      
        <div className='info_Box2'> 
            <img className="img-size" src={this.state.results.img} alt=""/>
            <h1>{this.state.results.name}</h1>
            {console.log(this.state.results)}
            <span> {this.state.results.discript}</span>

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