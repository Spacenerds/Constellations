import React, { Component } from 'react';
import PickACard from './PickACard'
import axios from 'axios';

import Nav from '.././Nav';


class TarotView extends Component {
    constructor(props){
        super(props);
        this.state = {
            tarot: [],
        }
    }
    componentDidMount(){
        axios.get('/tarot').then( (response) => {
            response.data;
            this.setState({
                tarot: response.data
            })
        })
    }
    render() {
        return (
            <div className="tarot-container">
                <h1>Tarot Reading</h1>
                <div className="pickAcard-container">
                    <PickACard tarot={this.state.tarot}/>
                </div>
                <p>use database call to find card description</p>
                <p>state should probably be in the parent component?</p>
            </div>
        );
    }
}

export default TarotView;