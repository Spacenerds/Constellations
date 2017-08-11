import React from 'react';

const PickACard = () => {
    return (
        <div>
            <h1>pick a card</h1>
            <div className="pickCard1">pick a card</div>
            <div className="pickCard1">pick a card</div>
            <div className="pickCard1">pick a card</div>
            <div className="pickCard1">pick a card</div>
            <div className="pickCard1">pick a card</div>
            <p>On click of div (looks like back of card), randomly generate a number between 1 and 22, then use that ID to get the card. Flip the div card over to reveal it</p>
        </div>
    );
};

export default PickACard;