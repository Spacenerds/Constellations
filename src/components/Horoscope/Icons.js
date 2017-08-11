import React, { Component } from 'react';
import aquarius from './Icons/aquarius.svg'

class Icons extends Component {
    render(){
        return(
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
            </div>
        )
    }
}

const styles = {
    svgList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        

    },
    svg: {
        fill: 'none',
        stroke: '#000',
        strokeLinecap: 'round',
        strokeLineJoin: 'round',
        width: 130,
        height: 130
    }
}

export default Icons;