import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className="homepage">
                <div className="logo">
                    <svg className="topSVG">
                        {/*a*/}
                        <circle className="logo-star" cx={9} cy={112} r={1} />
                        <circle className="logo-star" cx={39.5} cy={44} r={1} />
                        <circle className="logo-star" cx={69} cy={110} r={1} />
                        {/*s*/}
                        <circle className="logo-star" cx={136} cy={49} r={1} />
                        <circle className="logo-star" cx={99} cy={105} r={1} />
                        {/*t*/}
                        <circle className="logo-star" cx={167} cy={43} r={1} />
                        <circle className="logo-star" cx={221} cy={43} r={1} />
                        <circle className="logo-star" cx={195} cy={112} r={1} />
                        {/*r*/}
                        <circle className="logo-star" cx={250} cy={43} r={1} />
                        <circle className="logo-star" cx={250} cy={112} r={1} />
                        <circle className="logo-star" cx={298} cy={112} r={1} />
                        {/*o*/}
                        <circle className="logo-star" cx={356} cy={41} r={1} />
                        <circle className="logo-star" cx={356} cy={114} r={1} />
                        {/*n*/}
                        <circle className="logo-star" cx={21} cy={144} r={1} />
                        <circle className="logo-star" cx={21} cy={210} r={1} />
                        <circle className="logo-star" cx={74} cy={200} r={1} />
                        <circle className="logo-star" cx={74} cy={144} r={1} />
                        {/*e*/}
                        <circle className="logo-star" cx={105} cy={142} r={1} />
                        <circle className="logo-star" cx={105} cy={210} r={1} />
                        <circle className="logo-star" cx={149} cy={142} r={1} />
                        <circle className="logo-star" cx={149} cy={210} r={1} />
                        {/*r*/}
                        <circle className="logo-star" cx={177} cy={142} r={1} />
                        <circle className="logo-star" cx={177} cy={210} r={1} />
                        <circle className="logo-star" cx={225} cy={211} r={1} />
                        {/*d*/}
                        <circle className="logo-star" cx={250} cy={142} r={1} />
                        <circle className="logo-star" cx={250} cy={210} r={1} />
                        {/*s*/}
                        <circle className="logo-star" cx={374} cy={147} r={1} />
                        <circle className="logo-star" cx={339} cy={206} r={1} />
                    </svg>

                    <svg version="1.1" className="bottomSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1163 578">
                        <path className="logo-lines" d="M399.4,65.7c-16.3-16.9-31.5-20.6-46.4-20.6c-23.5,0-49.4,13.9-49.4,43.1c0,22.6,14.9,32.8,33.5,40.8
                        c6.3,2.7,13.3,5.3,20.6,8c35.8,12.9,52.7,31.2,52.7,59c0,6.6-1.7,15.9-4,21.2c-11.6,27.5-33.5,34.2-56,34.2
                        c-17.6,0-47.4-6.6-62-26.2"/>
                        <line className="logo-lines" x1="491.3" y1="44.5" x2="645.5" y2="44.5"/>
                        <path className="logo-lines" d="M777.5,192.7h-51.6l-0.4,52.4V44.5h64c0.7,0,2.3,0.3,4.3,0.3c2,0.3,4.6,1,6.6,1c40.1,4,51.4,43.1,51.4,70.3
                        c0,20.9-8,55.7-38.1,70.6C800.7,192.2,787.5,192.7,777.5,192.7z"/>
                        <path className="logo-lines" d="M935.4,144c0-54.4,41.8-104.8,100.8-104.8c60.4,0,100.8,51.7,100.8,104.8c0,55.4-41.8,105.5-100.5,105.5
                        C975.8,249.4,935.4,196.4,935.4,144z"/>
                        <path className="logo-lines" d="M819.1,533.4h-95.2v-201h54.4c1.3,0,14.9,1,21.9,1.7c27.2,2,62,8.6,83.2,46.1c2.7,4.6,6.3,11.6,8.3,17.2
                        c4,11.3,5.6,25.2,5.6,33.8c0,28.9-11.6,73-48.1,91.9C842,527.1,827.4,533.4,819.1,533.4z"/>
                        <polyline className="logo-lines" points="25,246.1 115.2,48 205.4,246.1 "/>
                        <line className="logo-lines" x1="55.6" y1="178.9" x2="174.8" y2="178.9"/>
                        <polyline className="logo-lines" points="48.2,195.1 115.2,220.8 182.2,195.1 "/>
                        <line className="logo-lines" x1="384.3" y1="150.2" x2="324.3" y2="247.3"/>
                        <path className="logo-lines" d="M1090.4,349.6c-16.3-16.9-31.5-20.6-46.4-20.6c-23.5,0-49.4,13.9-49.4,43.1c0,22.6,14.9,32.8,33.5,40.8
                        c6.3,2.7,13.3,5.3,20.6,8c35.8,12.9,52.7,31.2,52.7,59c0,6.6-1.7,15.9-4,21.2c-11.6,27.5-33.5,34.2-56,34.2
                        c-17.6,0-47.4-6.6-62-26.2"/>
                        <line className="logo-lines" x1="1075.2" y1="434.1" x2="1015.3" y2="531.1"/>
                        <line className="logo-lines" x1="490.4" y1="73.3" x2="644.4" y2="73.3"/>
                        <line className="logo-lines" x1="567.4" y1="73.3" x2="567.4" y2="247.2"/>
                        <line className="logo-lines" x1="808.9" y1="188.2" x2="842.5" y2="245"/>
                        <polyline className="logo-lines" points="784.2,192.6 816.1,245 857.9,245 "/>
                        <path className="logo-lines" d="M566.3,481h-51.6l-0.4,52.4V332.7h64c0.7,0,2.3,0.3,4.3,0.3c2,0.3,4.6,1,6.6,1c40.1,4,51.4,43.1,51.4,70.3
                        c0,20.9-8,55.7-38.1,70.6C589.4,480.4,576.2,481,566.3,481z"/>
                        <line className="logo-lines" x1="597.7" y1="476.5" x2="631.2" y2="533.2"/>
                        <polyline className="logo-lines" points="572.9,480.9 604.8,533.2 646.6,533.2 "/>
                        <line className="logo-lines" x1="1036.1" y1="38.1" x2="1036.1" y2="249.4"/>
                        <polyline className="logo-lines" points="61.3,533.2 61.3,337.4 215.3,498 215.3,330.8 "/>
                        <line className="logo-lines" x1="220.8" y1="523.3" x2="154.8" y2="523.3"/>
                        <polyline className="logo-lines" points="427.7,331.9 304.5,331.9 304.5,532.1 432.1,532.1 "/>
                        <line className="logo-lines" x1="305.6" y1="416.6" x2="420" y2="416.6"/>
                        <line className="logo-lines" x1="305.6" y1="425.4" x2="420" y2="425.4"/>
                        <line className="logo-lines" x1="305.6" y1="445.2" x2="417.8" y2="445.2"/>
                        <polyline className="logo-lines" points="871.1,363.8 850.2,433.1 868.9,509 "/>
                    </svg>
                </div>

                <Link to="/constellations"><button>Constellations</button></Link>
                <Link to="/events"><button>Events</button></Link>
                <Link to="/tarot"><button>Tarot</button></Link>
            </div>
        );
    }
}

export default Home;