import React, { Component } from 'react';
import './Horoscope.css'
import Icon from './Icon/Icon'

class Icons extends Component {
    render(){
        
        return(
            <div>
                <div className="horor-title">
                    <h1> PICK YOUR SIGN</h1>
                </div>
                <section  >
                    <div className="icons-columns">
                        <div>
                            <Icon sign="aries" img={require ("./Icons/aries.svg")}/>
                            <Icon sign="taurus" img={require ("./Icons/taurus.svg")}/>
                            <Icon sign="gemini" img={require ("./Icons/gemini.svg")}/>
                            <Icon sign="cancer" img={require ("./Icons/cancer.svg")}/>
                        </div>
                        <div>
                            <Icon sign="leo" img={require ("./Icons/leo.svg")}/>
                            <Icon sign="virgo" img={require ("./Icons/virgo.svg")}/>
                            <Icon sign="libra" img={require ("./Icons/libra.svg")}/>
                            <Icon sign="scorpio" img={require ("./Icons/scorpio.svg")}/>
                        </div>
                        <div>
                            <Icon sign="sagittarius" img={require ("./Icons/sagittarius.svg")}/>
                            <Icon sign="capricorn" img={require ("./Icons/capricorn.svg")}/>
                            <Icon sign="aquarius" img={require ("./Icons/aquarius.svg")}/>
                            <Icon sign="pisces" img={require ("./Icons/pisces.svg")}/>
                        </div>
                    </div>
                </section>
                

            </div>
        )   
    }
}



export default Icons;