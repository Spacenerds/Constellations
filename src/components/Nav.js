import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import Background from './horor.jpg';
import './Nav.css'

class Nav extends Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }

    };
    render(){ 
        return(
            <div> 
            {/* <div style={styles.menuStyles}>
                <Link to="/"><button>Home</button></Link>
                <Link to="/constellations"><button>Constellations</button></Link>
                <Link to="/constellationsDos"><button>ConstellationsDos</button></Link>
                <Link to="/events"><button>Events</button></Link>
                <Link to="/tarot"><button>Tarot</button></Link>  
                <Link to="/horoscope"><button>Horoscope</button></Link>    */}
            {/* </div>  */}


            <Menu isOpen={ false } styles={ styles } pageWrapId={ "page-wrap" } >
                <Link to="/" id="home" className="hvr-pulse" isOpen ={ false }  >Home</Link>
                <Link to="/events" id="home" className="hvr-pulse" isOpen ={ false }  >Events</Link>
                <Link to="/constellationsDos" id="home" className="hvr-pulse" isOpen ={ false }  >Constellations</Link>
                 <Link to="/constellations" id="home" className="hvr-pulse" isOpen ={ false }  >Zodiac</Link>
                <Link to="/tarot" id="home" className="hvr-pulse" isOpen ={ false }  >Tarot</Link>
                <Link to="/horoscope" id="home" className="hvr-pulse" isOpen ={ false }  >Horoscope</Link>
            </Menu>
            </div> 

            // <div style={styles.menuStyles}>
            //     <Link to="/"><button>Home</button></Link>
            //     <Link to="/constellations"><button>Constellations</button></Link>
            //     <Link to="/events"><button>Events</button></Link>
            //     <Link to="/tarot"><button>Tarot</button></Link>  
            //     <Link to="/horoscope"><button>Horoscope</button></Link>   
            // </div> 

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