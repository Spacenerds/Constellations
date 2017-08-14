import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import Icons from './Icons';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import './Horoscope.css'
import Nav from '.././Nav';
import Background from './hororbg.jpg';

class Horoscope extends Component {
    
    render(){
        return(
            <div style={styles.itemsStyles}>
                <Icons />
            </div>
        );
    }
};

const styles = {
    itemsStyles: {
        height: '100vh',
        flexDirection: 'column',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover'
    }
}


export default Horoscope;