import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import virtualsky from './virtualsky.js';

class Home extends Component {

    componentDidMount(){
        let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
        let ctx = canvas.getContext('2d');
        // ctx.fillStyle = 'rgb(200,0,0)';
        // ctx.fillRect(10, 10, 55, 50);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var star = [];

        function Star(name,nameTwo,xLoc,y,brightness,color){
            this.name = name;
            this.nameTwo = nameTwo;
            this.xLoc = xLoc;
            this.y = y;
            this.brightness = brightness;
            this.color = color;
        }
        function createStars() {

            star[   1] = new Star("HR 1", "", 0.0860833333333, +45.2291666667,  6.70, "#cad7ff");
            star[   2] = new Star("HR 2", "", 0.0843888888889, -0.503055555556,  6.29, "#fff4ea");
            star[   3] = new Star(" 33", "", 0.0889166666667, -5.7075,  4.61, "#ffd2a1");
            star[   4] = new Star(" 86", "", 0.095, +13.3961111111,  5.51, "#fff4ea");
            star[   5] = new Star("HR 5", "", 0.104444444444, +58.4366666667,  5.96, "#fff4ea");
            star[   6] = new Star("HR 6", "", 0.105277777778, -49.075,  5.70, "#fff4ea");
            star[   7] = new Star(" 10", "", 0.107361111111, +64.1961111111,  5.59, "#aabfff");
            star[   8] = new Star("HR 8", "", 0.110222222222, +29.0213888889,  6.13, "#ffd2a1");
            star[   9] = new Star("HR 9", "", 0.113916666667, -23.1075,  6.18, "#cad7ff");
            star[  10] = new Star("HR 10", "", 0.121722222222, -17.3863888889,  6.19, "#cad7ff");
            star[  11] = new Star("HR 11", "", 0.128916666667, -2.54888888889,  6.43, "#aabfff");
            star[  12] = new Star("HR 12", "", 0.129666666667, -22.5088888889,  5.94, "#cad7ff");
            star[  13] = new Star("HR 13", "", 0.134305555556, -33.5294444444,  5.68, "#ffd2a1");
            star[  14] = new Star("HR 14", "", 0.136694444444, -2.44777777778,  6.07, "#ffd2a1");
            star[  15] = new Star("\u03b1", "Alpheratz", 0.139805555556, +29.0905555556,  2.06, "#aabfff");
            star[  16] = new Star("HR 16", "", 0.138166666667, -8.82388888889,  5.99, "#fff4ea");
            star[  17] = new Star("HR 17", "", 0.144722222222, +36.6266666667,  6.19, "#f8f7ff");
            star[  18] = new Star("HR 18", "", 0.142611111111, -17.5775,  6.06, "#ffcc6f");
            star[  19] = new Star("HR 19", "", 0.147833333333, +25.4627777778,  6.23, "#ffd2a1");
            star[  20] = new Star("HR 20", "", 0.155611111111, +79.7147222222,  6.01, "#cad7ff");
            star[  21] = new Star("\u03b2", "Caph", 0.152972222222, +59.1497222222,  2.27, "#f8f7ff");
            star[  22] = new Star(" 87", "", 0.150666666667, +18.2119444444,  5.53, "#fff4ea");
            star[  23] = new Star("HR 23", "", 0.150666666667, -54.0019444444,  6.33, "#fff4ea");
            star[  24] = new Star("\u03ba\u00b9", "", 0.155833333333, -27.9877777778,  5.42, "#f8f7ff");
            star[  25] = new Star("\u03b5", "", 0.156861111111, -45.7475,  3.88, "#ffd2a1");
            star[  26] = new Star(" 34", "", 0.167305555556, +11.1455555556,  5.51, "#aabfff");
            star[  27] = new Star(" 22", "", 0.172027777778, +46.0722222222,  5.03, "#f8f7ff");
            star[  28] = new Star("HR 28", "", 0.174916666667, +57.1655555556,  6.74, "#aabfff");
            star[  29] = new Star("HR 29", "", 0.171888888889, -5.24861111111,  5.84, "#ffd2a1");
            star[  30] = new Star("\u03b3\u00b3", "", 0.16725, -82.2238888889,  5.28, "#fff4ea");
            star[  31] = new Star("HR 31", "", 0.178555555556, -12.58,  5.85, "#ffd2a1");
            star[  32] = new Star("HR 32", "", 0.177388888889, -73.2244444444,  6.64, "#f8f7ff");
            star[  33] = new Star("  6", "", 0.18775, -15.4680555556,  4.89, "#f8f7ff");
            star[  34] = new Star("\u03ba\u00b2", "", 0.192888888889, -27.7997222222,  5.41, "#ffd2a1");
            star[  35] = new Star("\u03b8", "", 0.195555555556, -35.1330555556,  5.25, "#f8f7ff");
            star[  36] = new Star("HR 36", "", 0.19975, +48.1525,  6.16, "#ffd2a1");
            star[  37] = new Star("HR 37", "", 0.202777777778, -17.9383333333,  5.25, "#ffd2a1");
            star[  38] = new Star("HR 38", "", 0.214, +37.6933333333,  6.73, "#aabfff");
            star[  39] = new Star("\u03b3", "Algenib", 0.220611111111, +15.1836111111,  2.83, "#aabfff");
            star[  40] = new Star("HR 40", "", 0.223333333333, +26.9872222222,  6.30, "#fff4ea");
            star[  41] = new Star(" 23", "", 0.225222222222, +41.0352777778,  5.72, "#f8f7ff");
            star[  42] = new Star("HR 42", "", 0.228361111111, -26.0219444444,  5.94, "#ffd2a1");
            star[  43] = new Star("HR 43", "", 0.228944444444, -26.2847222222,  6.31, "#ffd2a1");
            star[  44] = new Star("HR 44", "", 0.233972222222, +33.2061111111,  6.25, "#cad7ff");
            star[  45] = new Star("\u03c7", "", 0.243388888889, +20.2066666667,  4.80, "#ffcc6f");
            star[  46] = new Star("HR 46", "", 0.241, -7.78055555556,  5.12, "#ffcc6f");
            star[  47] = new Star("HR 47", "", 0.222055555556, -84.9941666667,  5.77, "#ffcc6f");
            star[  48] = new Star("  7", "", 0.244, -18.9327777778,  4.44, "#ffcc6f");
            star[  49] = new Star("HR 49", "", 0.248916666667, +22.2841666667,  6.24, "#cad7ff");
            star[  50] = new Star(" 35", "", 0.249666666667, +8.82083333333,  5.79, "#f8f7ff");
            star[  51] = new Star("HR 51", "", 0.248472222222, -9.56972222222,  5.75, "#aabfff");
            star[  52] = new Star("HR 52", "", 0.251944444444, +31.5358333333,  6.45, "#ffd2a1");
            star[  53] = new Star("HR 53", "", 0.252944444444, +27.2830555556,  6.35, "#cad7ff");
            star[  54] = new Star("HR 54", "", 0.2495, -34.9044444444,  6.17, "#ffd2a1");
            star[  55] = new Star("HR 55", "", 0.270555555556, +76.9508333333,  6.35, "#aabfff");
            star[  56] = new Star("HR 56", "", 0.272666666667, +43.5947222222,  6.15, "#cad7ff");
            star[  57] = new Star("HR 57", "", 0.269138888889, -31.4463888889,  5.67, "#ffd2a1");
            star[  58] = new Star("HR 58", "", 0.265333333333, -75.9113888889,  6.49, "#fff4ea");
            star[  59] = new Star(" 36", "", 0.276138888889, +8.24,  6.11, "#fff4ea");
            star[  60] = new Star("HR 60", "", 0.282527777778, +61.5333333333,  5.74, "#fff4ea");
            star[  61] = new Star("HR 61", "", 0.278472222222, -20.2105555556,  6.47, "#aabfff");
            star[  62] = new Star("HR 62", "", 0.285861111111, +47.9475,  5.89, "#aabfff");
            star[  63] = new Star("\u03b8", "", 0.284861111111, +38.6816666667,  4.61, "#cad7ff");
            star[  64] = new Star("HR 64", "", 0.280277777778, -78.7805555556,  6.77, "#f8f7ff");
            star[  65] = new Star("HR 65", "", 0.295277777778, +51.4330555556,  6.14, "#9bb0ff");
            star[  66] = new Star("HR 66", "", 0.292388888889, -19.0511111111,  6.45, "#f8f7ff");
            star[  67] = new Star("HR 67", "", 0.296583333333, +1.68888888889,  6.17, "#ffd2a1");
            star[  68] = new Star("\u03c3", "", 0.305472222222, +36.7852777778,  4.52, "#cad7ff");
            star[  69] = new Star("HR 69", "", 0.304777777778, +11.2058333333,  6.05, "#ffd2a1");
            star[  70] = new Star(" 26", "", 0.311694444444, +43.7911111111,  6.11, "#aabfff");
            star[  71] = new Star("HR 71", "", 0.310638888889, +31.5172222222,  5.87, "#cad7ff");
            star[  72] = new Star("HR 72", "", 0.311611111111, -8.05277777778,  6.46, "#fff4ea");
            star[  73] = new Star("HR 73", "", 0.311833333333, -43.2352777778,  6.33, "#ffd2a1");
            star[  74] = new Star("\u03b9", "Deneb Kaitos Schemali", 0.323805555556, -8.82388888889,  3.56, "#ffd2a1");
            star[  75] = new Star("HR 75", "", 0.328222222222, +40.7297222222,  6.33, "#ffd2a1");
            star[  76] = new Star("HR 76", "", 0.334777777778, +48.8652777778,  6.52, "#cad7ff");
            star[  77] = new Star("\u03b6", "", 0.334527777778, -64.8747222222,  4.23, "#f8f7ff");
            star[  78] = new Star("HR 78", "", 0.340111111111, +30.9358333333,  5.90, "#aabfff");
            star[  79] = new Star("HR 79", "", 0.345972222222, +32.9113888889,  5.79, "#ffd2a1");
            star[  80] = new Star(" 41", "", 0.343305555556, +8.19027777778,  5.37, "#ffd2a1");
            star[  81] = new Star("HR 81", "", 0.348472222222, +10.9769444444,  6.56, "#cad7ff");
            star[  82] = new Star("\u03c1", "", 0.352027777778, +37.9686111111,  5.18, "#f8f7ff");
            star[  83] = new Star("\u03c0", "", 0.344166666667, -69.625,  5.51, "#aabfff");
            star[  84] = new Star("\u03b9", "", 0.358666666667, -28.9816666667,  5.18, "#fff4ea");
            star[  85] = new Star("HR 85", "", 0.362861111111, -20.0577777778,  5.12, "#ffcc6f");
            star[  86] = new Star(" 42", "", 0.37375, +13.4825,  6.23, "#ffd2a1");
            star[  87] = new Star("HR 87", "", 0.357944444444, -77.4269444444,  5.97, "#ffd2a1");
            star[  88] = new Star("  9", "", 0.381055555556, -12.2094444444,  6.39, "#fff4ea");
            star[  89] = new Star("HR 89", "", 0.386833333333, -31.0361111111,  6.55, "#aabfff");
            star[  90] = new Star("HR 90", "", 0.400555555556, +38.5772222222,  7.39, "#ffaa6f");
            star[  91] = new Star("HR 91", "", 0.404333333333, +52.02,  5.57, "#aabfff");
            star[  92] = new Star(" 12", "", 0.413194444444, +61.8311111111,  5.40, "#aabfff");
            star[  93] = new Star("HR 94", "", 0.40825, -2.21916666667,  6.07, "#ffd2a1");
            star[  94] = new Star("HR 96", "", 0.418444444444, +53.0469444444,  5.74, "#aabfff");
            star[  95] = new Star(" 44", "", 0.423388888889, +1.93972222222,  5.77, "#fff4ea");
            star[  96] = new Star("\u03b2", "", 0.429194444444, -77.2541666667,  2.80, "#fff4ea");
            star[  97] = new Star("\u03b1", "Ankaa", 0.438055555556, -42.3061111111,  2.39, "#ffd2a1");
            star[  98] = new Star("\u03ba", "", 0.436722222222, -43.68,  3.94, "#cad7ff");

        }

        createStars();
        console.log("stars are here", star[6]);
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            for (let i = 1; i < star.length; i++) {
                ctx.beginPath();
                ctx.arc(star[i].xLoc, star[i].y, star[i].brightness, 0, 2 * Math.PI);
                ctx.fill();
            }
        }

        function update() {
            for (let i = 0; i < star.length; i++) {
                var e = star[i];
            }
        }

        function pulse() {
            update();
            draw();
            requestAnimationFrame(pulse);
        }

        pulse();

        window.onresize = function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createStars();
        }    


    }

    render() {




        return (
            <div className="homepage">
                <div className="logo">
                    <svg className="topSVG">
                        {/*n*/}
                        <circle className="logo-star" cx={9} cy={110} r={1} />
                        <circle className="logo-star" cx={9} cy={36} r={1} />
                        <circle className="logo-star" cx={65} cy={96} r={1} />
                        <circle className="logo-star" cx={65} cy={36} r={1} />
                        {/*i*/}
                        <circle className="logo-star" cx={109} cy={110} r={1} />
                        <circle className="logo-star" cx={109} cy={36} r={1} />
                        {/*g*/}
                        <circle className="logo-star" cx={212} cy={48} r={1} />
                        <circle className="logo-star" cx={185} cy={76} r={1} />
                        {/*h*/}
                        <circle className="logo-star" cx={250} cy={36} r={1} />
                        <circle className="logo-star" cx={250} cy={110} r={1} />
                        <circle className="logo-star" cx={298} cy={36} r={1} />
                        <circle className="logo-star" cx={298} cy={110} r={1} />
                        {/*t*/}
                        <circle className="logo-star" cx={331} cy={40} r={1} />
                        <circle className="logo-star" cx={389} cy={40} r={1} />
                        <circle className="logo-star" cx={360} cy={110} r={1} />
                        {/*s*/}
                        <circle className="logo-star" cx={100} cy={229} r={1} />
                        <circle className="logo-star" cx={142} cy={173} r={1} />
                        {/*k*/}
                        <circle className="logo-star" cx={176} cy={240} r={1} />
                        <circle className="logo-star" cx={176} cy={165} r={1} />
                        <circle className="logo-star" cx={220} cy={240} r={1} />
                        <circle className="logo-star" cx={217} cy={165} r={1} />
                        {/*y*/}
                        <circle className="logo-star" cx={253} cy={165} r={1} />
                        <circle className="logo-star" cx={306} cy={165} r={1} />
                        <circle className="logo-star" cx={280} cy={240} r={1} />
                    </svg>
                    <svg version="1.1" className="bottomSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389 214">
                        <polyline class="logo-lines" points="8.5,81.2 8.5,9.1 63.1,65.2 63.1,9.2 "/>
                        <line class="logo-lines" x1="43.4" y1="79.3" x2="66.6" y2="79.3"/>
                        <path class="logo-lines" d="M106,81.2V8.7"/>
                        <path class="logo-lines" d="M206.7,20c-5.9-7.7-14.2-9.6-21.8-9.6c-22.2,0-33,17-33,35.4c0,21.7,13.9,33,33.6,33c7.5,0,12.7-0.9,21.1-4.9
                            L206.5,47h-27.8"/>
                        <path class="logo-lines" d="M137.6,140.1c-5.8-6-11.3-7.4-16.6-7.4c-8.4,0-17.7,5-17.7,15.4c0,8.1,5.3,11.7,12,14.6
                            c2.3,0.9,4.7,1.9,7.4,2.8c12.8,4.6,18.9,11.2,18.9,21.1c0,2.4-0.6,5.7-1.4,7.6c-4.2,9.8-12,12.2-20,12.2c-6.3,0-17-2.4-22.2-9.4"/>
                        <path class="logo-lines" d="M212,204.4l-37.5-38.9l35.9-33.1"/>
                        <polyline class="logo-lines" points="286.8,132.6 271.9,155.5 256.8,132.6 "/>
                        <line class="logo-lines" x1="190.5" y1="54.5" x2="206.5" y2="54.5"/>
                        <line class="logo-lines" x1="243" y1="9.5" x2="243" y2="81.5"/>
                        <line class="logo-lines" x1="289.9" y1="10" x2="289.9" y2="82"/>
                        <line class="logo-lines" x1="243.5" y1="40.5" x2="290.5" y2="40.5"/>
                        <line class="logo-lines" x1="243.5" y1="51.5" x2="289.5" y2="51.5"/>
                        <line class="logo-lines" x1="322" y1="11.5" x2="377.5" y2="11.5"/>
                        <line class="logo-lines" x1="322.5" y1="20.5" x2="377" y2="20.5"/>
                        <line class="logo-lines" x1="349.5" y1="20.5" x2="349.8" y2="80"/>
                        <line class="logo-lines" x1="108.5" y1="203.5" x2="137.5" y2="174.5"/>
                        <line class="logo-lines" x1="171.5" y1="132.5" x2="171.5" y2="204.5"/>
                        <line class="logo-lines" x1="194.5" y1="132.5" x2="171.5" y2="154.5"/>
                        <polyline class="logo-lines" points="245,132 272,174.4 297,132.4 "/>
                        <line class="logo-lines" x1="272" y1="173.6" x2="272" y2="205"/>
                    </svg>


                </div>




                <canvas ref="myCanvas" />
            </div>
        );
    }
}

export default Home;