import React, { Component } from 'react';
<<<<<<< Updated upstream
import './Horoscope.css'
=======
import aquarius from './Icons/aquarius.svg'
// import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

class Icons extends Component {
    constructor(props){
        super(props);
        this.state = {
        json: {},
        getContent: false

        }
        this.displayContent = this.displayContent.bind(this)
        this.getHoroscope = this.getHoroscope.bind(this)
        this.closeHoroscope = this.closeHoroscope.bind(this)
    }

    componentWillMount () {
        const URL = 'https://aztro.herokuapp.com/?sign=aries&day=today';

        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    } 

    getHoroscope() {
        this.setState( { getContent: true })  
    }

    closeHoroscope() {
        this.setState( { getContent: false }) 
    
        
    }

    displayContent() {
        return (
            <div className="horoscope-container">
                <h1>{this.state.json.sign}</h1>
                <div className="content-style">
                    <div className="row-one">
                        Current Date: {this.state.json.current_date} <br />
                        Compatibility: {this.state.json.compatibility} <br />
                        Lucky Number: {this.state.json.lucky_number} <br />
                    </div>
                    <div>
                    Lucky Time: {this.state.json.lucky_time} <br />
                    Color: {this.state.json.color} <br />
                    Date Range: {this.state.json.date_range} <br />
                    </div>
                </div>
                <div className="mood">
                    Mood: {this.state.json.mood} <br />
                </div>
                <div className="horor-description">
                    Description: {this.state.json.description} <br />
                </div>
                <button onClick={ this.closeHoroscope }>close</button>
            </div>
        )
}
    render(){
        console.log(this.state)
        var content = null;
        this.state.getContent ?
            content = this.displayContent() : 
            content = ""
        return(
<<<<<<< Updated upstream
            <div  >
                <section style={ styles.iconList } >
                    <button className="iconbutton" onClick={ this.getHoroscope } ><img className="iconitem animate" alt="" src={require ("./Icons/aries.svg") } /></button>
                    <img className="iconitem animate" alt="" src={require ("./Icons/taurus.svg")} />
                    <img className="iconitem animate" alt="" src={require ("./Icons/gemini.svg")} />
                    <img className="iconitem animate" alt="" src={require ("./Icons/cancer.svg")} />
                    <img className="iconitem animate" alt="" src={require ("./Icons/leo.svg")} />
                    <img className="iconitem animate" alt="" src={require ("./Icons/pisces.svg")} />
                    <img className="iconitem animate" alt="" src={require ("./Icons/virgo.svg")} />
                    <img className="iconitem animate" alt="" src={require ("./Icons/libra.svg")} />
                    <img className="iconitem animate" alt="" src={require ("./Icons/scorpio.svg")} />
                    <img className="iconitem animate" alt="" src={require ("./Icons/sagittarius.svg")} />
                    <img className="iconitem animate" alt="" src={require ("./Icons/capricorn.svg")} />
                    <img className="iconitem animate" alt="" src={require ("./Icons/aquarius.svg")} />
                </section>
                <div style={ styles.hororStyle }>
                    { content }
                </div>
=======
            <div style={styles.svgsList}>
                <img style={styles.svg} src={require ("./Icons/aries.svg")} />
                <img style={styles.svg} src={require ("./Icons/taurus.svg")} />
                <img style={styles.svg} src={require ("./Icons/gemini.svg")} />
                <img style={styles.svg} src={require ("./Icons/cancer.svg")} />
                <img style={styles.svg} src={require ("./Icons/leo.svg")} />
                <img style={styles.svg} src={require ("./Icons/virgo.svg")} />
                <img style={styles.svg} src={require ("./Icons/libra.svg")} />
                <img style={styles.svg} src={require ("./Icons/scorpio.svg")} />
                <img style={styles.svg} src={require ("./Icons/sagittarius.svg")} />
                <img style={styles.svg} src={require ("./Icons/capricorn.svg")} />
                <img style={styles.svg} src={require ("./Icons/aquarius.svg")} />
                <img style={styles.svg} src={require ("./Icons/pisces.svg")} />
                
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            </div>
        )           
    }
}

const styles = {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    containerStyle: {
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
    },
    iconList:{
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: 200
    },
    hororStyle: {
        color: 'white',

=======
=======
>>>>>>> Stashed changes

    svg: {
        fill: 'none',
        stroke: '#000',
        strokeLinecap: 'round',
        strokeLineJoin: 'round',
        width: 130,
        height: 130
>>>>>>> Stashed changes
    }
}

export default Icons;