import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import Background from './horor.jpg';
import './Nav.css'
import config from './config.js';
import axios from 'axios';

class Nav extends Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false,
            loggedIn: false
        }
        

    };

    componentDidMount() {
      axios.get('/api/loggeduser').then( (response) => {
        this.setState({
          loggedIn: response.data
        })
      })
    }
    render(){ 
      let amILogged = false;
      if(this.props.loggedIn){
        amILogged = <a href={config.logOut}><li className="hvr-pulse">LOG OUT </li></a>
      } else {
        amILogged = <a href={config.logIn}><li className="hvr-pulse">LOG IN </li></a>
      }
        return(
            <div> 
            <Menu isOpen={ false } styles={ styles } >
                <Link to="/" id="home" className="hvr-pulse in-icons" isOpen ={ false }  >Home</Link>
                <Link to="/events" id="home" className="hvr-pulse" isOpen ={ false }  >Events</Link>
                <Link to="/constellationsDos" id="home" className="hvr-pulse" isOpen ={ false }  >Constellations</Link>
                <Link to="/constellations" id="home" className="hvr-pulse" isOpen ={ false }  >Zodiac</Link>
                <Link to="/tarot" id="home" className="hvr-pulse" isOpen ={ false }  >Tarot</Link>
                <Link to="/categories" id="home" className="hvr-pulse" isOpen ={ false }  >Categoriest</Link>
                <Link to="/horoscope" id="home" className="hvr-pulse" isOpen ={ false }  >Horoscope</Link>
                <Link to="/solar" id="home" className="hvr-pulse" isOpen ={ false }  >Solar System</Link>
                <Link to="/space" id="home" className="hvr-pulse" isOpen ={ false }  >Space</Link>
                <Link to="/moon" id="home" className="hvr-pulse" isOpen ={ false }  >How Far is the Moon</Link>
                <div className="login-text">
                {amILogged}
                </div>
            </Menu>
            </div> 
        );
    }
}

const styles = {
    bmBurgerButton: {
        zIndex: '5',
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
      }, 

    menuStyles: {
      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      position: 'absolute',
      alignItems: 'center',
      width: '100vw'
    }
  }



export default Nav;