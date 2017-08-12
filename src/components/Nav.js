import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'

class Nav extends Component{



    render(){ 
        return(
            <div style={styles.menuStyles}>
                <Link to="/"><button>Home</button></Link>
                <Link to="/constellations"><button>Constellations</button></Link>
                <Link to="/events"><button>Events</button></Link>
                <Link to="/tarot"><button>Tarot</button></Link>  
                <Link to="/horoscope"><button>Horoscope</button></Link>   
            </div> 
        );
    }
}

const styles = {
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