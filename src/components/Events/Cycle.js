import React, { Component } from 'react';
import $ from 'jquery';
import AddToCalendar from 'react-add-to-calendar';

import moonphases from './moonphases.png';

class Cycle extends Component {
    constructor() {
        super();
        this.initLunarPhase = this.initLunarPhase.bind(this);
        this.moonPhase = this.moonPhase.bind(this);
        this.julday = this.julday.bind(this);
        this.drawMoon = this.drawMoon.bind(this);
    }
    componentDidMount(){
        this.initLunarPhase();
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
        $('#lunar-container').animate({
            opacity: 1
        }, 3000)
        let nextFullMoon = {
            title: "Full Moon",
            description: "Full Moon",
            location: "Earth",
            startTime: '2017-09-06T03:02:00-04:00',
            endTime: '2017-09-06T09:45:00-04:00'
        }
        return (
            <div>
                <h1>Lunar Cycle</h1>
                <div id="lunar-container">
                    <div className="tonight-moon">
                        <p>Tonight's moon</p>
                        <h3><span id="month">11</span>/<span id="day">11</span>/<span id="year">11</span></h3>
                    </div>
                    <canvas id="moonCanvas" width="200px" height="200px"></canvas>
                </div>
                <div className="lunar-cycle-image">
                    <img src={moonphases} alt="moon phases"/>
                </div>
                <div className="lunar-text">
                    <h3>Next Full Moon</h3>
                    <p>September 6</p>
                    <button>
                        <AddToCalendar event={nextFullMoon}/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Cycle;