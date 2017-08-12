import React, { Component } from 'react';
import PickACard from './PickACard'

class TarotView extends Component {

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