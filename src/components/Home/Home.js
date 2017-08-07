import React, { Component } from 'react';
import $ from 'jquery';

class Home extends Component {
    render() {
        $test = setInterval(function(){ drawKhaos(2, 2); }, 50);
        $x = 1;
        $rgb = 0;
        $opacity = 1;

    

        return (
            <div className="homepage">
                <canvas id="logo">
                </canvas>
            </div>
        );
    }
}

export default Home;