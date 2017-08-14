import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import Background from './horor.jpg';
import './Nav.css'

class Nav extends Component{
    constructor(props){
        super(props)
        var isMenuOpen = function(state) {
            return state.isOpen;
          };
    }

    
    render(){ 
        return(
            <Menu styles={ styles } pageWrapId={ "page-wrap" } >
                <Link to="/" id="home" className="hvr-pulse" onClick="close">Home</Link>
                <Link to="/events" id="home" className="hvr-pulse" onClick="close">Events</Link>
                <Link to="/constellations" id="home" className="hvr-pulse" onClick="close">Constellations</Link>
                <Link to="/tarot" id="home" className="hvr-pulse" onClick="close">Tarot</Link>
                <Link to="/horoscope" oneClick="close" id="home" className="hvr-pulse" onClick="close">Horoscope</Link>
            </Menu>
        );
    }
}

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#ffffff'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: { 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
        
      }
      
  }



export default Nav;