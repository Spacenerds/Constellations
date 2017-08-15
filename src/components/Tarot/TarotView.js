import React, { Component } from 'react';
import PickACard from './PickACard'
import axios from 'axios';
import './tarot.scss';
import Nav from '.././Nav';


class TarotView extends Component {
    constructor(props){
        super(props);
        this.state = {
            tarot: [],
        }
    }
    componentDidMount(){
        axios.get('/api/tarot').then( (response) => {
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
            </div>
        );
    }
}

export default TarotView;