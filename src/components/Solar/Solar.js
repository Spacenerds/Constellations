import React, { Component } from 'react';
import $ from 'jquery'
import './Solar.css'

class Solar extends Component {

    render() {
        return(
            <div>
                <div id="container">			
                    <div id="solarsystem">
                        <ol>
                            <li>Sun
                                <div className="desc">
                                    <h2>Sun</h2>
                                    The Sun is the star at the center of the Solar System. It is almost perfectly spherical and consists of hot plasma interwoven with magnetic fields.[12][13] It has a diameter of about 1,392,684 km,[5] about 109 times that of Earth, and its mass (about 2×1030 kilograms, 330,000 times that of Earth) accounts for about 99.86% of the total mass of the Solar System.
                                </div>
                                
                            </li>
                            <li>Mercury
                                <div className="desc">
                                    <h2>Mercury</h2>
                                    Mercury (0.4 AU from the Sun) is the closest planet to the Sun and the smallest planet in the Solar System (0.055 Earth masses). Mercury has no natural satellites, and its only known geological features besides impact craters are lobed ridges or rupes, probably produced by a period of contraction early in its h
                                </div>	
                            </li>
                            <li>Venus<div className="desc">
                                    <h2>Venus</h2>
                                    Venus (0.7 AU from the Sun) is close in size to Earth (0.815 Earth masses), and, like Earth, has a thick silicate mantle around an iron core, a substantial atmosphere and evidence of internal geological activity. However, it is much drier than Earth and its atmosphere is ninety times as dense. Venus has no natural satellites.
                                </div></li>
                            <li>
                                Earth<div className="desc">
                                    <h2>Earth</h2>
                                    Earth (1 AU from the Sun) is the largest and densest of the inner planets, the only one known to have current geological activity, and is the only place in the Solar System where life is known to exist.[71] Its liquid hydrosphere is unique among the terrestrial planets, and it is also the only planet where plate tectonics has been observed.
                                </div>
                                <ul>
                                    <li><span>Moon</span></li>
                                </ul>
                            </li>
                            <li>Mars<div className="desc">
                                    <h2>Mars</h2>
                                    Mars (1.5 AU from the Sun) is smaller than Earth and Venus (0.107 Earth masses). It possesses an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars (roughly 0.6% of that of the Earth).[73] Its surface, peppered with vast volcanoes such as Olympus Mons and rift valleys such as Valles Marineris, shows geological activity that may have persisted until as recently as 2 million years ago.
                                </div></li>
                            <li>Jupiter
                                <div className="desc">
                                    <h2>Jupiter</h2>
                                    Jupiter (5.2 AU), at 318 Earth masses, is 2.5 times the mass of all the other planets put together. It is composed largely of hydrogen and helium. Jupiter's strong internal heat creates a number of semi-permanent features in its atmosphere, such as cloud bands and the Great Red Spot.
        Jupiter has 67 known satellites.
                                </div>
                            </li>
                            <li>Saturn
                                <div className="desc">
                                    <h2>Saturn</h2>
                                    Saturn (9.5 AU), distinguished by its extensive ring system, has several similarities to Jupiter, such as its atmospheric composition and magnetosphere. Although Saturn has 60% of Jupiter's volume, it is less than a third as massive, at 95 Earth masses, making it the least dense planet in the Solar System. The rings of Saturn are made up of small ice and rock particles.
                                </div>
                            </li>
                            <li>Uranus
                                <div className="desc">
                                    <h2>Uranus</h2>
                                    Uranus (19.6 AU), at 14 Earth masses, is the lightest of the outer planets. Uniquely among the planets, it orbits the Sun on its side; its axial tilt is over ninety degrees to the ecliptic. It has a much colder core than the other gas giants, and radiates very little heat into space.
                                </div>
                            </li>
                            <li>Neptune
                                <div className="desc">
                                    <h2>Neptune</h2>
                                    Neptune (30 AU), though slightly smaller than Uranus, is more massive (equivalent to 17 Earths) and therefore more dense. It radiates more internal heat, but not as much as Jupiter or Saturn.[90]
        Neptune has 13 known satellites.
                                </div>
                            </li>
                            <li>Pluto
                                <div className="desc">
                                    <h2>Pluto</h2>
                                    Pluto, formal designation 134340 Pluto, is the second-most-massive known dwarf planet in the Solar System (after Eris) and the tenth-most-massive body observed directly orbiting the Sun.[h] Originally classified as the ninth planet from the Sun, Pluto was recategorized as a dwarf planet and plutoid owing to the discovery that it is only one of several large bodies within the Kuiper belt.
                                </div>
                            </li>
                        </ol>
                    </div>

                </div>
                <div className="solag-bg ">
                    <div className="stars"></div>
                    <div className="twinkling"></div>
                    <div className="clouds"></div>
                </div>
            </div>
        )
    }
}

export default Solar;