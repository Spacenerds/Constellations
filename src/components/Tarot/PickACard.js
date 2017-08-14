
import React, { Component } from 'react';
import $ from 'jquery';

import cardback from './back.png';
import fool from './00fool.png';
import magician from './01magician.png';
import highpriestess from './02highpriestess.png';
import empress from './03empress.png';
import emperor from './04emperor.png';
import hierophant from './05hierophant.png';
import lovers from './06lovers.png';
import chariot from './07chariot.png';
import strength from './08strength.png';
import hermit from './09hermit.png';
import wheeloffortune from './10wheeloffortune.png';
import justice from './11justice.png';
import hangedman from './12hangedman.png';
import death from './13death.png';
import temperance from './14temperance.png';
import devil from './15devil.png'
import tower from './16tower.png';
import star from './17star.png';
import moon from './18moon.png';
import sun from './19sun.png';
import judgement from './20judgement.png';
import world from './21world.png';

class PickACard extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: []
        }
        this.pickCard = this.pickCard.bind(this);
        this.setCards = this.setCards.bind(this);
        this.dealCards = this.dealCards.bind(this);
    }
    componentDidMount(){

        this.dealCards();
        this.setCards();
    }
    dealCards(){
        console.log('deal');
        $('.pickCard1').stop().animate(
            {
                'top': '0vh',
                'opacity': '1',
            },
            1000,
            'swing'
        );
        $('.pickCard2').stop().animate(
            {
                'top': '0vh',
                'opacity': '1',
            },
            1250,
            'swing'
        );
        $('.pickCard3').stop().animate(
            {
                'top': '0vh',
                'opacity': '1',
            },
            1500,
            'swing'
        );
        $('.pickCard4').stop().animate(
            {
                'top': '0vh',
                'opacity': '1',
            },
            1750,
            'swing'
        );
        $('.pickCard5').stop().animate(
            {
                'top': '0vh',
                'opacity': '1',
            },
            2000,
            'swing'
        );
    }
    setCards(){
        var arr = [];
        while(arr.length < 8){
            var randomnumber = Math.floor((Math.random()*21)+ 0);
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }
        this.setState({
            cards: arr
        })
    };
    pickCard(i){
        var CARDWIDTH = 120;
        function turnCompatible(elem, src) {
            $('.pickCard' + i + '.turnCompatible').animate({
                width: 0,
                marginLeft: CARDWIDTH / 2,
                marginRight: CARDWIDTH / 2
            }, function () {
                this.src = src
                $(this).animate({
                    width: CARDWIDTH,
                    marginLeft: 0,
                    marginRight: 0,
                })
            })
        }
        //figure out which card image should be displayed
        var front = `http://localhost:3000${fool}`;
        if(this.state.cards[i] === 1){
            front = `http://localhost:3000${magician}`
        }else if(this.state.cards[i] === 2){
            front = `http://localhost:3000${highpriestess}`
        }else if(this.state.cards[i] === 3){
            front = `http://localhost:3000${empress}`
        }else if(this.state.cards[i] === 4){
            front = `http://localhost:3000${emperor}`
        }else if(this.state.cards[i] === 5){
            front = `http://localhost:3000${hierophant}`
        }else if(this.state.cards[i] === 6){
            front = `http://localhost:3000${lovers}`
        }else if(this.state.cards[i] === 7){
            front = `http://localhost:3000${chariot}`
        }else if(this.state.cards[i] === 8){
            front = `http://localhost:3000${strength}`
        }else if(this.state.cards[i] === 9){
            front = `http://localhost:3000${hermit}`
        }else if(this.state.cards[i] === 10){
            front = `http://localhost:3000${wheeloffortune}`
        }else if(this.state.cards[i] === 11){
            front = `http://localhost:3000${justice}`
        }else if(this.state.cards[i] === 12){
            front = `http://localhost:3000${hangedman}`
        }else if(this.state.cards[i] === 13){
            front = `http://localhost:3000${death}`
        }else if(this.state.cards[i] === 14){
            front = `http://localhost:3000${temperance}`
        }else if(this.state.cards[i] === 15){
            front = `http://localhost:3000${devil}`
        }else if(this.state.cards[i] === 16){
            front = `http://localhost:3000${tower}`
        }else if(this.state.cards[i] === 17){
            front = `http://localhost:3000${star}`
        }else if(this.state.cards[i] === 18){
            front = `http://localhost:3000${moon}`
        }else if(this.state.cards[i] === 19){
            front = `http://localhost:3000${sun}`
        }else if(this.state.cards[i] === 20){
            front = `http://localhost:3000${judgement}`
        }else if(this.state.cards[i] === 21){
            front = `http://localhost:3000${world}`
        }
        var back = `http://localhost:3000${cardback}`;
         $('.pickCard' + i + '.turnCompatible').click(function () {
            this.src == back ? turnCompatible(this, front) : null; //for toggling fun
        })
    }
    render() {
        return (
            <div>
                <h3>Double click to flip your cards over</h3>
                <div className="card-holder">
                    <div className= "card-base" onClick={() => this.pickCard(1)}>
                        <img className="card pickCard1 turnCompatible" src={cardback} alt='tarot card' />
                    </div>
                    <div className="card-base" onClick={() => this.pickCard(2)}>
                        <img className="card pickCard2 turnCompatible" src={cardback} alt='tarot card' />
                    </div>
                    <div className="card-base" onClick={() => this.pickCard(3)}>
                        <img className="card pickCard3 turnCompatible" src={cardback} alt='tarot card' />
                    </div>
                    <div className= "card-base" onClick={() => this.pickCard(4)}>
                        <img className="card pickCard4 turnCompatible" src={cardback} alt='tarot card' />
                    </div>
                    <div className="card-base" onClick={() => this.pickCard(5)}>
                        <img className="card pickCard5 turnCompatible" src={cardback} alt='tarot card' />
                    </div>
                </div>
            </div>
        );
    }
}

export default PickACard;