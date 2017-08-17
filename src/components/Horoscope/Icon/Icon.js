import React, { Component } from 'react';
import '../Horoscope.css'

class Icon extends Component {
    constructor(props){
        super(props);
        this.state = {
        json: {},
        getContent: false,

        }
        this.displayContent = this.displayContent.bind(this)
        this.getHoroscope = this.getHoroscope.bind(this)
        this.closeHoroscope = this.closeHoroscope.bind(this)
    }

    componentDidMount () {
        const URL = `https://aztro.herokuapp.com/?sign=${this.props.sign}&day=today`
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }
    
    getHoroscope() {
        this.setState( { getContent: true })  
    }

    closeHoroscope() {
        this.setState( { getContent: false }) 
    }

    displayContent() {
        return (
            <div>
                <div className="line"></div>
                <div className="horoscope-container">
                    <div className="horor-sign">{this.props.sign}</div>
                    <div className="content-style">
                        <div className="row-one">
                            Current Date: {this.state.json.current_date} <br />
                            Compatibility: {this.state.json.compatibility} <br />
                            Lucky Number: {this.state.json.lucky_number} <br />
                        </div>
                        <div className="row-two">
                        Lucky Time: {this.state.json.lucky_time} <br />
                        Color: {this.state.json.color} <br />
                        Date Range: {this.state.json.date_range} <br />
                        </div>
                    </div>
                    <div className="mood">
                        Mood: {this.state.json.mood} <br />
                    </div>
                    <div className="horor-description">
                        Description: {this.state.json.description} <br />
                        
                    </div>
                    <button className="btn-close" onClick={ this.closeHoroscope }>close</button>
                </div>
            </div>
        )
}
    render() {
        console.log(this.state)
        var content = null;
        this.state.getContent ?
            content = this.displayContent() : 
            content = ""
        return(
            <div >
                
                <div>
                    <img  onClick={ this.getHoroscope } className="iconitem animate hvr-grow-rotate" alt="" src={ this.props.img }  />
                </div>
                    { content }

            </div>
        )
    }
}


export default Icon;