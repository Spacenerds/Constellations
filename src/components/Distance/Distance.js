import React, { Component } from 'react';
import './moon.css';

import earth from './images/moon.png';
import astronaut from './images/astronaut.png';

class Distance extends Component {
    render() {
        return (
            <div className="moon-distance-container">
                <div className="md-back">
                    <img className="earth-img" src={earth} alt="earth" />
                    <div className="hint">
                        <p>Here's a hint:</p>
                        <p>It's pretty dang far away</p>
                    </div>
                    <div className="hint">
                        <p>Here's a hint:</p>
                        <p>It's pretty dang far away</p>
                    </div>
                    <div className="hint">
                        <p>Here's a hint:</p>
                        <p>It's pretty dang far away</p>
                    </div>
                    <div className="hint">
                        <p>Here's a hint:</p>
                        <p>It's pretty dang far away</p>
                    </div>
                    <div className="hint">
                        <p>Here's a hint:</p>
                        <p>It's pretty dang far away</p>
                    </div>
                    <div className="hint">
                        <p>Here's a hint:</p>
                        <p>It's pretty dang far away</p>
                    </div>
                </div>
                <div className="md-middle">
                    <img className="astronaut-img" src={astronaut} alt="astronaut" />
                </div>
                <div className="md-front">
                    <h1>How far away is the Moon?</h1>
                    <div className="distance-tracker">
                        <p className="miles">0</p>
                        <p>miles</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Distance;