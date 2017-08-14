import React, { Component } from 'react';
import aquarius from './Icons/aquarius.svg'
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import './Horoscope.css'

class Icons extends Component {
    
    myfunction() {
        console.log("CLICKED");
  }
  
    render(){
  
        return(
            <div >
                <section style={styles.iconList}>
                    <button className="iconbutton"><img className="iconitem animate" onClick={this.myfunction} src={require ("./Icons/aries.svg") } /></button>
                    <img className="iconitem animate" src={require ("./Icons/taurus.svg")} />
                    <img className="iconitem animate" src={require ("./Icons/gemini.svg")} />
                    <img className="iconitem animate" src={require ("./Icons/cancer.svg")} />
                    <img className="iconitem animate" src={require ("./Icons/leo.svg")} />
                    <img className="iconitem animate" src={require ("./Icons/pisces.svg")} />
                    <img className="iconitem animate" src={require ("./Icons/virgo.svg")} />
                    <img className="iconitem animate" src={require ("./Icons/libra.svg")} />
                    <img className="iconitem animate" src={require ("./Icons/scorpio.svg")} />
                    <img className="iconitem animate" src={require ("./Icons/sagittarius.svg")} />
                    <img className="iconitem animate" src={require ("./Icons/capricorn.svg")} />
                    <img className="iconitem animate" src={require ("./Icons/aquarius.svg")} />
                </section>
            </div>
        )           
    }
}

const styles = {
    iconList:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
    }
}

export default Icons;