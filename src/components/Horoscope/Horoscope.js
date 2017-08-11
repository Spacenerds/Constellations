import React, { Component } from 'react';
import Icons from './Icons';

class Horoscope extends Component {
    render(){
        return(
            <div stye={styles.contentStyle}>
                <p style={styles.text}>This is for Horoscope</p>
                <Icons />
            </div>
        );
    }
};

const styles = {

    contentStyle: {
        alignItems: 'center'
    },

    text: {
        color: 'white',
        display: 'flex',
        alignSelf: 'flex-end',
        textAlign: 'center',
        fontSize: 50
    },
}



export default Horoscope;