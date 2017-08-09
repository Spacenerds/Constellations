import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM, { findDOMNode } from 'react-dom';
// import {SectionsContainer, Section} from 'react-fullpage';

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
            anchors:              ['Events', 'Types', 'sectionThree'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation:      true
        };
        return (
            <div className="events-container">
                <canvas id="canvas" width="500" height="500" ref={(canvas) => { this.canvasRef = canvas; }}></canvas>
            </div>
        );
    }
}

export default Events;