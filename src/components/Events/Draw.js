import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class Draw extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicks: 0,
            lastClick: [0, 0]
        }
        this.drawLine = this.drawLine.bind(this);
        this.getCursorPosition = this.getCursorPosition.bind(this);
    }
    componentDidMount(){
        this.canvas = findDOMNode(this.canvasRef);
        this.canvas.addEventListener('click', this.drawLine, false);
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = '#05004c';
        // ctx.fillRect(0,0, 500, 500);
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
        return [x, y];
    }

    drawLine(e) {
        this.canvas = findDOMNode(this.canvasRef);
        const ctx = this.canvas.getContext('2d');
        const x = this.getCursorPosition(e)[0] - 2;
        const y = this.getCursorPosition(e)[1] - 2;
        console.log("draw line activated", x, y, this.state.clicks)
        if (this.state.clicks !== 1) {
            let cake = this.state.clicks + 1
            this.setState({
                clicks: cake
            })
        } else {
            ctx.beginPath();
            ctx.moveTo(this.state.lastClick[0], this.state.lastClick[1]);
            ctx.lineTo(x, y, 6);
            ctx.strokeStyle = '#0F4367';
            ctx.stroke();
            this.setState({
                clicks: 0
            })
        }
        this.setState({
            lastClick: [x, y]
        })
    };

    render() {
        return (
            <div>
                <div className="star-backer"></div>
                <canvas id="canvasConst" width="1000" height="500" ref={(canvas) => { this.canvasRef = canvas; }}></canvas>
                <input className="const-name-input" placeholder="name your constellation"/>
                <h1>Draw your own constellation</h1>
            </div>
        );
    }
}

export default Draw;