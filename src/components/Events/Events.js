import React, { Component } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import {Link} from 'react-router-dom';

import Cycle from './Cycle';
import Meteor from './Meteor';
import LunarEclipse from './Leclipse';
import SolarEclipse from './Seclipse';
import Draw from './Draw';
import Nav from '.././Nav';
import './events.css';

class Events extends Component {

    render() {
        let options = {
            sectionClassName:     'section',
            anchors:              ['cycle', 'lunareclipse', 'solareclipse', 'meteor', 'draw'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation:      true
        };
        
        return (
            <div>
                <div className="bottom-ground">
                    <div className="foreground">
                        <div className="tree1"></div>
                        <div className="reed reed1"></div>
                        <div className="reed reed2"></div>
                        <div className="reed reed3"></div>
                        <div className="tree2"></div>
                        <div className="bush"></div>
                        <div className="grass"></div>
                    </div>
                </div>
                <SectionsContainer {...options} className="events-container">
                    <Nav /> 
                    <Section className="lunar-cycle">
                        <Cycle loca={this.props.location.hash}/>
                    </Section>
                    <Section className="lunar-eclipse">
                        <LunarEclipse/>
                    </Section>
                    <Section className="solar-eclipse">
                        <SolarEclipse />
                    </Section>
                    <Section className="meteor">
                        <Meteor />
                    </Section>
                    <Section className="draw">
                        <Draw />
                    </Section>
                </SectionsContainer>
            </div>
        );
    }
}

export default Events;