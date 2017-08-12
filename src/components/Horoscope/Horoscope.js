import React, { Component } from 'react';
import Icons from './Icons';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import './Search.css'
import Nav from '.././Nav';

class Horoscope extends Component {
    render(){
        return(
            <div>
                <Icons />
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
                 
        </FormGroup>
            </div>
        );
    }
};



export default Horoscope;