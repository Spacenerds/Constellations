import React, { Component } from 'react';
import PickACard from './PickACard'

class TarotView extends Component {
    render() {
        return (
            <div>
                <h1>Tarot Reading</h1>
                <div className="pickAcard-container">
                    <PickACard/>
                </div>
            </div>
        );
    }
}

export default TarotView;