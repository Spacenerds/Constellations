import React, { Component } from 'react';
import '.././App.scss'; 
import $ from 'jquery'
import Sky from './Sky'

class Nav extends Component{
    render(){ 
        return(
           <div>
                <input id="test" type="checkbox" />
                <label htmlFor="test">
                <svg className="burger" width={86} height={60} viewBox="0 0 150 150">
                    <g strokeWidth={12}>   
                    <line x1={6} y1={6} x2={80} y2={6} />
                    <line x1={6} y1={28} x2={80} y2={28} />
                    <line x1={6} y1={50} x2={80} y2={50}> </line>
                    </g>
                </svg>
                <svg className="close" width={86} height={60} viewBox="0 0 150 150">
                    <g strokeWidth={12}>   
                    <line x1={42} y1={6} x2={42} y2={80} />
                    <line x1={6} y1={42} x2={80} y2={42} />
                    </g>
                </svg>
                </label>
                <div className="menu" id="stars stars2">
                <div>Home</div>
                <div>About</div>
                <div>Hello</div>
                <div>Contact</div>
                </div>
                
            </div>
        );
    }
}

export default Nav;