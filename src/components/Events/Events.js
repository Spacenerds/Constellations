import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {SectionsContainer, Section} from 'react-fullpage';
import {Link} from 'react-router-dom';

import Cycle from './Cycle';
import Meteor from './Meteor';
import LunarEclipse from './Leclipse';
import SolarEclipse from './Seclipse';
import Nav from '.././Nav';
import './events.css';

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
            anchors:              ['cycle', 'lunareclipse', 'solareclipse', 'meteor', 'planetary', 'test'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation:      true
        };
        
        return (
            <div>
                <div className="bottom-ground">
                    <div className="foreground">
                        <div className="tree1"></div>
                        <div className="reed reed1"></div>
                        <div className="reed reed2"></div>
                        <div className="reed reed3"></div>
                        <div className="tree2"></div>
                        <div className="bush"></div>
                        <div className="grass"></div>
                    </div>
                </div>
                <SectionsContainer {...options} className="events-container">
                    <Nav /> 
                    <Section className="lunar-cycle">
                        <Cycle loca={this.props.location.hash}/>
                    </Section>
                    <Section className="lunar-eclipse">
                        <LunarEclipse/>
                    </Section>
                    <Section className="solar-eclipse">
                        <SolarEclipse />
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
            </div>
        );
    }
}

export default Events;