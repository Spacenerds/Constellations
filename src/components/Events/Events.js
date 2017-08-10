import React, { Component } from 'react';
import $ from 'jquery';
import AddToCalendar from 'react-add-to-calendar';
import { findDOMNode } from 'react-dom';
import {SectionsContainer, Section} from 'react-fullpage';
import {Link} from 'react-router-dom';

import moonphases from './moonphases.png';

class Events extends Component {
    constructor() {
        super();
        // this.state = {

        // }       
        // this.getCursorPosition = this.getCursorPosition.bind(this);
        // this.drawLine = this.drawLine.bind(this);
        // this.updateCanvas = this.updateCanvas.bind(this);
        this.initLunarPhase = this.initLunarPhase.bind(this);
        this.moonPhase = this.moonPhase.bind(this);
        this.julday = this.julday.bind(this);
        this.drawMoon = this.drawMoon.bind(this);
    }

    componentDidMount(){
        // window.addEventListener('scroll', this.handleScroll);
        // this.canvas = findDOMNode(this.canvasRef);
        // this.ctx = this.canvas.getContext('2d');
        this.initLunarPhase();
        // this.updateCanvas();
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
        this.canvas.addEventListener('click', this.drawLine, false);
        this.ctx.fillRect(0,0, 500, 500);
    }

    //lunar cycle drawing
        initLunarPhase(){
            var $date=new Date();
            var $year=$date.getFullYear();
            var $month=$date.getMonth()+1;
            var $day=$date.getDate();
            
            document.getElementById('day').innerHTML=$day;
            if ($month<10) {
                document.getElementById('month').innerHTML='0'+$month;
            }
            else {
                document.getElementById('month').innerHTML=$month;
            }
            document.getElementById('year').innerHTML=$year;
            
            var $moonPhase= this.moonPhase($year,$month,$day);
            this.drawMoon($moonPhase-1);
        }
        moonPhase(year,month,day) {
            let n = Math.floor(12.37 * (year -1900 + ((1.0 * month - 0.5)/12.0)));
            let RAD = 3.14159265/180.0;
            let t = n / 1236.85;
            let t2 = t * t;
            let as = 359.2242 + 29.105356 * n;
            let am = 306.0253 + 385.816918 * n + 0.010730 * t2;
            let xtra = 0.75933 + 1.53058868 * n + ((1.178e-4) - (1.55e-7) * t) * t2;
            xtra += (0.1734 - 3.93e-4 * t) * Math.sin(RAD * as) - 0.4068 * Math.sin(RAD * am);
            let i = (xtra > 0.0 ? Math.floor(xtra) :  Math.ceil(xtra - 1.0));
            let j1 = this.julday(year,month,day);
            let jd = (2415020 + 28 * n) + i;
            return (j1-jd + 30)%30;
        }
        julday(year, month, day) {
            if (year < 0) { year ++; }
            var jy = parseInt(year, 10);
            var jm = parseInt(month, 10) +1;
            if (month <= 2) {jy--;	jm += 12;	} 
            var jul = Math.floor(365.25 *jy) + Math.floor(30.6001 * jm) + parseInt(day, 10) + 1720995;
            if (day+31*(month+12*year) >= (15+31*(10+12*1582))) {
                let ja = Math.floor(0.01 * jy);
                jul = jul + 2 - ja + Math.floor(0.25 * ja);
            }
            return jul;
        }
        drawMoon($moonPhase){
            var $moonCanvas=document.getElementById('moonCanvas');
            var $ctx=$moonCanvas.getContext('2d');
            //draw half moon
            var $radius=100;
            var $centerX=$moonCanvas.width/2;
            var $centerY=$moonCanvas.height/2;
            var $moonFill=$ctx.createRadialGradient($centerX, $centerY, $radius, $centerX, $centerY, 90);
            $moonFill.addColorStop(0,   '#080C22');
            $moonFill.addColorStop(1, 'white');
            $ctx.beginPath();
            $ctx.arc($centerX,$centerY,$radius,270*(Math.PI/180),90*(Math.PI/180),($moonPhase<15)?false:true);
            $ctx.fillStyle=$moonFill;
            $ctx.fill();
            //draw moon fill
            var $ovalWidth=-200;
            $ovalWidth=($moonPhase<15)?-200+$moonPhase*28.5:200-(($moonPhase-15)*28.5);
            var $ovalColor=($ovalWidth>0)? $moonFill:'#080C22';
            drawEllipse($ctx,$centerX-$ovalWidth/2,0,$ovalWidth,200,$ovalColor);
            function drawEllipse(ctx, x, y, w, h,fill) {
                var kappa = .5522848;
                    let ox = (w / 2) * kappa, // control point offset horizontal
                    oy = (h / 2) * kappa, // control point offset vertical
                    xe = x + w,           // x-end
                    ye = y + h,           // y-end
                    xm = x + w / 2,       // x-middle
                    ym = y + h / 2;       // y-middle
            
                ctx.beginPath();
                ctx.moveTo(x, ym);
                ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
                ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
                ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
                ctx.fillStyle=$ovalColor;
                ctx.fill();
            }
        };


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
        if(this.props.location.hash === "#cycle"){
            console.log("this should trigger a fade-in");
           $('#lunar-container').animate({
               opacity: 1
           }, 3000)
        }
        let nextFullMoon = {
            title: "Full Moon",
            description: "Full Moon",
            location: "Earth",
            startTime: '2017-09-06T03:02:00-04:00',
            endTime: '2017-09-06T09:45:00-04:00'
        }
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
                    <Link to="/"><button>Home</button></Link>
                </Section>
                <Section className="lunar-cycle">
                    <div class="stars">
                        <div class="star starone"></div>
                        <div class="star startwo"></div>
                        <div class="star starthree"></div>
                    </div>
                    <h1>Lunar Cycle</h1>
                    <div id="lunar-container">
                        <div className="tonight-moon">
                            <p>Tonight's moon</p>
                            <h3><span id="day">11</span>/<span id="month">11</span>/<span id="year">11</span></h3>
                        </div>
                        <canvas id="moonCanvas" width="200px" height="200px"></canvas>
                    </div>
                    <div className="lunar-cycle-image">
                        <img src={moonphases} alt="moon phases"/>
                        <ul>
                            <li>Young</li>
                            <li>Waxing Cresent</li>
                            <li>Waxing Gibbous</li>
                            <li>Full</li>
                            <li>Wanning Gibbous</li>
                            <li>Wanning Crecent</li>
                            <li>Old</li>
                        </ul>
                    </div>
                    <div className="lunar-text">
                        <h3>Next Full Moon</h3>
                        <p>September 6</p>
                        <button>
                            <AddToCalendar event={nextFullMoon}/>
                        </button>
                    </div>
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
                    <h2>Meteor Showers</h2>
                    <p>SVG animation of Meteor showers</p>
                    <p>Showers names and time of year to see them</p>
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