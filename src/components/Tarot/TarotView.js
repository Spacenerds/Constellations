import React, { Component } from 'react';
import PickACard from './PickACard'
import Nav from '.././Nav';


class TarotView extends Component {

    render() {
        return (
            <div className="tarot-container">
                <h1>Tarot Reading</h1>
                <div className="pickAcard-container">
                    <PickACard/>
                    <button></button>
                </div>
            </div>
        );
    }
}

export default TarotView;