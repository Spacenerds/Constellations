import React, { Component, Image } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';


class Categories extends Component{
    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        function fn() {
            window.requestAnimFrame = (function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
                            window.setTimeout(callback, 1000 / 60);
                        }
            })();
            var canvas = document.getElementById('canvas'), ctx = canvas.getContext('2d'), w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight, hue = 217, stars = [], count = 0, maxStars = 1200;
            var canvas2 = document.createElement('canvas'), ctx2 = canvas2.getContext('2d');
            canvas2.width = 100;
            canvas2.height = 100;
            var half = canvas2.width / 2, gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
            gradient2.addColorStop(0.025, '#fff');
            gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
            gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
            gradient2.addColorStop(1, 'transparent');
            ctx2.fillStyle = gradient2;
            ctx2.beginPath();
            ctx2.arc(half, half, half, 0, Math.PI * 2);
            ctx2.fill();
            function random(min, max) {
                if (arguments.length < 2) {
                    max = min;
                    min = 0
                }
                if (min > max) {
                    var hold = max;
                    max = min;
                    min = hold
                }
                return Math.floor(Math.random() * (max - min + 1)) + min
            }
    
            function maxOrbit(x, y) {
                var max = Math.max(x, y), diameter = Math.round(Math.sqrt(max * max + max * max));
                return diameter / 2
            }
    
            var Star = function () {
                this.orbitRadius = random(maxOrbit(w, h));
                this.radius = random(60, this.orbitRadius) / 12;
                this.orbitX = w / 2;
                this.orbitY = h / 2;
                this.timePassed = random(0, maxStars);
                this.speed = random(this.orbitRadius) / 900000;
                this.alpha = random(2, 10) / 10;
                count++;
                stars[count] = this
            };
            Star.prototype.draw = function () {
                var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX, y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY, twinkle = random(10);
                if (twinkle === 1 && this.alpha > 0) {
                    this.alpha -= 0.05
                } else if (twinkle === 2 && this.alpha < 1) {
                    this.alpha += 0.05
                }
                ctx.globalAlpha = this.alpha;
                ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
                this.timePassed += this.speed
            };
            for (var i = 0; i < maxStars; i++) {
                new Star()
            }
            function animation() {
                ctx.globalCompositeOperation = 'source-over';
                ctx.globalAlpha = 0.8;
                ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
                ctx.fillRect(0, 0, w, h);
                ctx.globalCompositeOperation = 'lighter';
                for (var i = 1, l = stars.length; i < l; i++) {
                    stars[i].draw()
                }
                ;
                window.requestAnimationFrame(animation)
            }
    
            animation();
        }
        fn();
    }
    render(){
        return(
            <div className="parent">
                <div className="row">
                    <div className="column-one">
                        <h1> Zodiac </h1>
                        <img className="horor-img" src={require ("./horoscope.png")}/>
                        <Link to="/horoscope">
                        <button className="button-cat">VIEW ZODIAC</button>
                        </Link>
                    </div>

                    <div className="column-two">
                        <h1>Events</h1>
                        <img className="horor-img" src={require ("./moon.png")}/>
                        <Link to="/events">
                        <button className="button-cat">VIEW EVENTS</button>
                        </Link>
                    </div>

                    <div className="column-three">
                        <h1>Constellations</h1>
                        <img className="horor-img" src={require ("./constellations.png")}/>
                        <Link to="/constellations">
                        <button className="button-cat">VIEW CONSTELLATIONS</button>
                        </Link>
                    </div>
                    <canvas id="canvas"></canvas>
                    <div className="bg-all"></div>
                </div>
=                
            </div>
        )
    }
}

export default Categories;