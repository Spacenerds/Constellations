import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {

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

                <Link to="/constellations"><button>Constellations</button></Link>
                <Link to="/events"><button>Events</button></Link>
            </div>
        );
    }
}

export default Home;