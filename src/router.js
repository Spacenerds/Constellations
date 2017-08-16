import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav'


import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Constellations from './components/ConstellationMapping';
import ConstellationsDos from './components/AllTheConstellations';
import TarotView from './components/Tarot/TarotView';
import Horoscope from './components/Horoscope/Horoscope';
import Space from './components/Space/Space';

export default(
    <Switch>
        <Route exact component={Home} path='/' />
        <Route component={Events} path='/events' />
        <Route component={Constellations} path='/constellations' />
        <Route component={ConstellationsDos} path='/constellationsdos' />
        <Route component={TarotView} path='/tarot' />
        <Route component={Horoscope} path='/horoscope' />
        <Route component={Space} path='/space' />
    </Switch>
)