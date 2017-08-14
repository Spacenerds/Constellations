import React, { Component } from 'react';
import Icons from './Icons';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import './Horoscope.css'
import Background from './hororbg.jpg';
=======
import './Search.css'
import Nav from '.././Nav';
>>>>>>> Stashed changes
=======
import './Search.css'
import Nav from '.././Nav';
>>>>>>> Stashed changes

class Horoscope extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const URL = 'https://aztro.herokuapp.com/?sign=aries&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

    render(){
        return(
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <div style={styles.itemsStyles}>
                <Icons />
=======
=======
>>>>>>> Stashed changes
            <div>
                {/*<Icons />
                <FormGroup id="search">
                <InputGroup>
                    <FormControl className="inputf" type="text" placeholder="Entere your birthdate" 
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.props.search(this.state.query)
                        }
                    }}/>
                    <InputGroup.Addon onClick={() => this.props.search(this.state.query)} >
                        <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>
                </InputGroup>
                 
        </FormGroup>*/}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            </div>
        );
    }
};

<<<<<<< Updated upstream
<<<<<<< Updated upstream
const styles = {
    itemsStyles: {
        height: '100vh',
        flexDirection: 'column',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover'
    }
}

=======
>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes

export default Horoscope;