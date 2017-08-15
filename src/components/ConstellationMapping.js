import React, { Component } from 'react';
import $ from 'jquery'
import './../DontTouch.css';
import Nav from './Nav';
import axios from 'axios';
class ConstellationMapping extends Component {

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
    axios.get(`api/zodiac/${num}`).then((response) => {
      console.log(response)
      this.setState({
        results: response.data[0]
      })
    });
  }

  render() {
    return (
      
      <div className="star-cont"> 

        <span className="zodiac-title">ZODIAC CONSTELLATIONS</span>
        

      <div className="stars">
        <div className="stars2"></div>
      <div className="twinkling">
        <div className='Base_Layer ' > 
        <div onClick={() => this.getconstel(1)} className='Aries'></div>
        <div onClick={() => this.getconstel(2)} className='Taurus' ></div>
        <div onClick={() => this.getconstel(3)} className='Gemini'></div>
        <div onClick={() => this.getconstel(4)} className='Cancer'></div>
        <div onClick={() => this.getconstel(5)} className='Leo'></div>
        <div onClick={() => this.getconstel(6)} className='Virgo'></div>
        <div onClick={() => this.getconstel(7)} className='Libra'></div>
        <div onClick={() => this.getconstel(8)} className='Scorpio'></div>
        <div onClick={() => this.getconstel(9)} className='Sagittarius'></div>
        <div onClick={() => this.getconstel(10)} className='Capricorn'></div>
        <div onClick={() => this.getconstel(11)} className='Aquarius'></div>
        <div onClick={() => this.getconstel(12)} className='Pisces'></div>
        </div>
      <div className='display_Box'>



        <div className='info_Box'> 
            <img src={this.state.results.img} alt=""/>
            <h1>{this.state.results.name}</h1>
            <span> {this.state.results.discript} </span>

        </div>

      </div>
      
      </div>
      </div>
      <Nav />
      </div>
      
      
      
    );
  }
}

export default ConstellationMapping;