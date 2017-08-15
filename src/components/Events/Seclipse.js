import React, { Component } from 'react';
import AddToCalendar from 'react-add-to-calendar';

class Seclipse extends Component {
    render() {
        let nextSolar = {
            title: "Partial Solar Eclipse",
            description: "Partial Solar Eclipse",
            location: "Argentina",
            startTime: '2018-02-15T03:02:00-04:00',
            endTime: '2018-02-15T09:45:00-04:00'
        }
        let nextNextSolar = {
            title: "Total Solar Eclipse",
            description: "Total Solar Eclipse",
            location: "Chile",
            startTime: '2019-07-02T03:02:00-04:00',
            endTime: '2019-07-02T09:45:00-04:00'
        }
        return (
            <div>
                <div className="se-img-container">
                    <div className="solar-eclipse-image">
                        <div className="sun"></div>
                        <div className="moon"></div>
                    </div>
                </div>
                <h2>Solar Eclipse</h2>
                <div className="solar-description">
                    <p>A solar eclipse (as seen from the planet Earth) is a type of eclipse that occurs when the Moon passes between the Sun and Earth, and when the Moon fully or partially blocks ("occults") the Sun. This can happen only at new moon when the Sun and the Moon are in conjunction as seen from Earth in an alignment referred to as syzygy. In a total eclipse, the disk of the Sun is fully obscured by the Moon. In partial and annular eclipses, only part of the Sun is obscured.</p>
                </div>
                <div className="solar-upcoming">
                    <h4>☀ Next Solar Eclipse ☀</h4>
                    <p>February 15 - Partial Lunar Eclipse<br/>
                    Best seen in: Chili, Argentina, and Antartica</p>
                    <button><AddToCalendar event={nextSolar}/></button>
                    <h4>☀ Next Total Solar Eclipse ☀</h4>
                    <p>July 2 2019<br/>
                    Best seen in: Chile or Argentina</p>
                    <button><AddToCalendar event={nextNextSolar}/></button>
                </div>
            </div>
        );
    }
}

export default Seclipse;