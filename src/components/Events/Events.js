import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {SectionsContainer, Section} from 'react-fullpage';
import {Link} from 'react-router-dom';

import Cycle from './Cycle';
import Meteor from './Meteor';
import Nav from '.././Nav';
<<<<<<< Updated upstream
=======
import './events.css';
>>>>>>> Stashed changes

class Events extends Component {
    // componentDidMount(){
    //     window.addEventListener('scroll', this.handleScroll);
    //     this.canvas = findDOMNode(this.canvasRef);
    //     this.ctx = this.canvas.getContext('2d');
    //     this.updateCanvas();
    // }

    getCursorPosition(e) {
        var x;
        var y;
        if (e.pageX !== undefined && e.pageY !== undefined) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        console.log("get position activated", x, y)
        return [x, y];
    }

    drawLine(e) {
        var x;
        var y;
        var clicks = 0;
        var lastClick = [0, 0];
        x = this.getCursorPosition(e)[0];
        y = this.getCursorPosition(e)[1];
        console.log("draw line activated", x, y)
        if (clicks !== 1) {
            clicks++;
        } else {
            console.log("triggered by else clicks", clicks, x, y, lastClick)
            this.ctx.beginPath();
            this.ctx.moveTo(lastClick[0], lastClick[1]);
            this.ctx.lineTo(x, y, 6);
            this.ctx.strokeStyle = '#fff';
            this.ctx.stroke();
            clicks = 0;
        }
        lastClick = [x, y];
    };

    updateCanvas() {
        this.canvas.addEventListener('click', this.drawLine, false);
        this.ctx.fillRect(0,0, 500, 500);
    }

    render() {
        let options = {
            sectionClassName:     'section',
            anchors:              ['types', 'cycle', 'lunareclipse', 'solareclipse', 'meteor', 'planetary', 'test'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation:      true
        };
        
        return (
            <SectionsContainer {...options} className="events-container">
                <Nav /> 
                <Section className="types">
                 
                    <h1>Celestial Events</h1>
                    <h3>Types of Events</h3>
                    <ul>
                        <li>Lunar Cycle</li>
                        <li>Lunar Eclipse</li>
                        <li>Solar Eclipse</li>
                        <li>Meteor Shower</li>
                        <li>Planetary Event</li>
                        <li>Comets</li>
                        <li>Equinox/Solstice</li>
                    </ul>
                    <Link to="/"><button>Home</button></Link>
                </Section>
                <Section className="lunar-cycle">
                    <Cycle loca={this.props.location.hash}/>
                </Section>
                <Section className="lunar-eclipse">
                    <div className="moon-eclipse"></div>
                    <div className="lunar-eclipse-text">
                        <h2>Lunar Eclipse</h2>
                        <h4>2017 Lunar Eclipses</h4>
                        <p>Feb 11 - Penumbral Lunar Eclipse<br/>
                        Best seen in: South America, eastern Canada, Europe, Africa, and West Asia</p>
                        <p>August 7 - Partial Lunar Eclipse<br/>
                        Best seen in: Eastern Africa, Central Asia, and Australia</p>
                    </div>
                </Section>
                <Section className="solar-eclipse">
                    <div className="se-img-container">
                        <div className="solar-eclipse-image">
                            <div className="sun"></div>
                            <div className="moon"></div>
                        </div>
                    </div>
                    <h2>Solar Eclipse</h2>
                    <p>2017 solar eclipses and locations</p>
                </Section>
                <Section className="meteor">
                    <Meteor />
                </Section>
                <Section className="planetary">
                    <h2>Planetary Events</h2>
                    <p>SVG animation of planets?</p>
                    <p>uh....the events and dates?</p>
                </Section>
                <Section className="test-container">
                    <canvas id="canvas" width="500" height="500" ref={(canvas) => { this.canvasRef = canvas; }}></canvas>
                </Section>
            </SectionsContainer>
        );
    }
}

export default Events;