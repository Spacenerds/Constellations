import React, { Component } from 'react';
import Icons from './Icons';
import './Horoscope.css'
import Background from './hororbg.jpg';
import './Search.css'
import Nav from '.././Nav';



class Horoscope extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const URL = 'https://aztro.herokuapp.com/?sign=aries&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

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