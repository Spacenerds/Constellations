import React, { Component } from 'react';
import Icons from './Icons';

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
            <div stye={styles.contentStyle}>
                <div>
                    Current Date: {this.state.json.current_date} <br />
                    Compatibility: {this.state.json.compatibility} <br />
                    Lucky Number: {this.state.json.lucky_number} <br />
                    Lucky Time: {this.state.json.lucky_time} <br />
                    Color: {this.state.json.color} <br />
                    Date Range: {this.state.json.date_range} <br />
                    Mood: {this.state.json.mood} <br />
                    Description: {this.state.json.description} <br />
                </div>
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