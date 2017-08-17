import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import './moon.css';

import earth from './images/moon.png';
import astronaut from './images/astronaut.png';
import ursaminor from './images/ursaminor.png';
import leo from './images/leo.png';

class Distance extends Component {
    render() {
        $(window).scroll(function() {
            const cake = $('.distance-tracker .miles');
            cake.text(Math.floor($(window).scrollTop()/100));
        })
        return (
            <div className="moon-distance-container">
                <div className="md-back">
                    <img className="earth-img" src={earth} alt="earth" />
                    <div className="hoop-back-set-1">
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                    </div>
                    <div className="hint">
                        <p>Here's a hint:</p>
                        <h2>It's pretty dang far away</h2>
                    </div>
                    <div className="hoop-back-set-1">
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                    </div>
                    <div className="visit-const">
                        <p>Oh look!</p>
                        <h3>It's a constellation</h3>
                        <div className="gemini">
                            <img src={ursaminor} alt="ursa minor" />
                            <h2>Ursa Minor</h2>
                            <p>She's an upsidedown bear</p>
                            <h4>Isn't she precious?</h4>
                            <p className="learnmore">Wanna learn more about her and her other constellation friends?</p>
                            <Link to="/constellationsDos">
                                Check out our constellations page!
                            </Link>
                        </div>
                    </div>
                    <div className="hoop-back-set-1">
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                    </div>
                    <div className="visit-zodiacs">
                        <p>Hey there!</p>
                        <h2>It's a zodiac constellation</h2>
                        <div className="leo">
                            <img src={leo} alt="leo" />
                            <h2>Leo the Lion</h2>
                            <p>He's a lion.</p>
                            <h4>RAWR</h4>
                            <p className="learnmore">Wanna learn more about him and other zodiacs?</p>
                            <Link to="/constellations">
                                See our zodiacs page!
                            </Link>
                        </div>
                    </div>
                    <div className="visit-horoscope">
                        <h2>PHEW, it's a long way to the moon!</h2>
                        <p>I wonder how much longer we have to go?</p>
                        <h3>Hey I know!</h3>
                        <Link to="/horoscope">
                            Let's check our horoscope!
                        </Link>
                    </div>
                    <div className="hoop-back-set-1">
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                    </div>
                    <div className="visit-tarot">
                        <h2>Well that was insiteful</h2>
                        <p>But it seemed rather vague, didn't it?</p>
                        <h3>Oooooh, what about a tarot reading?</h3>
                        <Link to="/horoscope">
                            These things are always accurate!
                        </Link>
                    </div>
                </div>
                <div className="md-middle">
                    <img className="astronaut-img" src={astronaut} alt="astronaut" />
                </div>
                <div className="md-front">
                    <h1>How far away is the Moon?</h1>
                    <div className="hoop-set-1">
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                    </div>
                    <div className="hoop-set-2">
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                    </div>
                    <div className="hoop-set-3">
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                    </div>
                    <div className="hoop-set-4">
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                        <div className="md-hoop"></div>
                    </div>
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