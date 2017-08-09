import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM, { findDOMNode } from 'react-dom';
import {SectionsContainer, Section} from 'react-fullpage';

class Events extends Component {
    constructor() {
        super();
        this.getCursorPosition = this.getCursorPosition.bind(this);
        this.drawLine = this.drawLine.bind(this);
        this.updateCanvas = this.updateCanvas.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        this.canvas = findDOMNode(this.canvasRef);
        this.ctx = this.canvas.getContext('2d');
        this.updateCanvas();
    }

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
        console.log("update canvas activated")
        this.canvas.addEventListener('click', this.drawLine, false);
        this.ctx.fillRect(0,0, 500, 500);
    }

    render() {
        let options = {
            sectionClassName:     'section',
            anchors:              ['types', 'cycle', 'lunareclipse', 'solareclipse', 'test'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation:      true
        };
        return (
            <SectionsContainer {...options} className="events-container">
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
                </Section>
                <Section className="lunar-cycle">
                    <h2>Lunar Cycle</h2>
                    <p>use the API to pull in the next lunar cycle event thing</p>
                    <p>Cool picture of lunar cycle</p>
                    <p>SVG animation of Lunar cycle</p>
                </Section>
                <Section className="lunar-eclipse">
                    <h2>Lunar Eclipse</h2>
                    <p>SVG animation of Lunar eclipse</p>
                    <p>2017 lunar eclipses and locations</p>
                </Section>
                <Section className="solar-eclipse">
                    <h2>Solar Eclipse</h2>
                    <p>SVG animation of Solar eclipse</p>
                    <p>2017 solar eclipses and locations</p>
                </Section>
                <Section className="meteor">
                    <h2>Meteor Showers</h2>
                    <p>SVG animation of Meteor showers</p>
                    <p>Showers names and time of year to see them</p>
                </Section>
                <Section className="test-container">
                    <canvas id="canvas" width="500" height="500" ref={(canvas) => { this.canvasRef = canvas; }}></canvas>
                </Section>
            </SectionsContainer>
        );
    }
}

export default Events;