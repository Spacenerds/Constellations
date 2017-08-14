import React, { Component } from 'react';
import PickACard from './PickACard'
import axios from 'axios';

import Nav from '.././Nav';


class TarotView extends Component {
    componentDidMount(){
        axios.get('/tarot').then( (response) => {
            console.log("cakeeeeeee", response);
        })
    }
    render() {
        return (
            <div className="tarot-container">
                <h1>Tarot Reading</h1>
                <div className="pickAcard-container">
                    <PickACard/>
                </div>
                <p>use database call to find card description</p>
                <p>state should probably be in the parent component?</p>
            </div>
        );
    }
}

export default TarotView;