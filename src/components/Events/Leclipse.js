import React, { Component } from 'react';
import AddToCalendar from 'react-add-to-calendar';

class Leclipse extends Component {
    render() {
        let nextLunar = {
            title: "Total Lunar Eclipse",
            description: "Partial Lunar Eclipse",
            location: "California",
            startTime: '2018-01-31T03:02:00-04:00',
            endTime: '2018-01-31T09:45:00-04:00'
        }
        return (
            <div>
                <div className="moon-eclipse"></div>
                <div className="lunar-eclipse-text">
                    <h2>Lunar Eclipse</h2>
                    <p>A lunar eclipse occurs when the Moon passes directly behind the Earth into its umbra, or shadow.<br/>
                    This can occur only when the sun, Earth, and moon are aligned exactly, or very closely so,<br/>
                    with the Earth in the middle. Hence, a lunar eclipse can occur only the night of a full moon.<br/>
                    The type and length of an eclipse depend upon the Moon's location relative to its orbital nodes.</p>
                    <h4>☽ Next Lunar Eclipse ☽</h4>
                    <p>January 31 - Total Lunar Eclipse<br/>
                    Best seen in: Western North America, Eastern Asia, and Australia</p>
                    <button><AddToCalendar event={nextLunar}/></button>
                </div>
            </div>
        );
    }
}

export default Leclipse;