import React, { Component } from 'react';
import sunskin from './sun/sunskin.jpg';
import mercuryskin from './mercury/mercuryskin.jpg';
import venusskin from './venus/venusskin.jpg';
import earthskin from './earth/earthskin.png';
import marsskin from './mars/marsskin.jpg';
import jupiterskin from './jupiter/jupiterskin.jpg';
import saturnskin from './saturn/saturnskin.jpg';
import uranusskin from './uranus/uranusskin.jpg';
import neptuneskin from './neptune/neptuneskin.jpg';
import plutoskin from './pluto/plutoskin.jpg'

class Space extends Component {
    render() {
        return (
            <a-scene>
                <a-assets>
                    <img id="sunTexture" src={sunskin} />
                    <img id="mercuryTexture" src={mercuryskin} />
                    <img id="venusTexture" src={venusskin} />
                    <img id="earthTexture" src={earthskin} />
                    <img id="marsTexture" src={marsskin} />
                    <img id="jupiterTexture" src={jupiterskin} />
                    <img id="saturnTexture" src={saturnskin} />
                    <img id="uranusTexture" src={uranusskin} />
                    <img id="neptuneTexture" src={neptuneskin} />
                    <img id="plutoTexture" src={plutoskin} />
                    <img id="skyTexture" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/YWAdzU2/360-vr-space-3002-virtual-reality-video-of-flying-through-star-fields-in-space-loop-designed-to-be-used-in-oculus-rift-samsung-gear-vr-and-other-virtual-reality-displays_Hs5sM0zM_thumbnail-full07.png" />
                </a-assets>

                <a-sphere src="#sunTexture" position="-110 2 -100" scale="7 7 7" rotation="0 45 45"></a-sphere>
                <a-sphere src="#mercuryTexture" position="-80 2 -100" scale="0.0553 0.0553 0.0553" rotation="0 45 45"></a-sphere>
                <a-sphere src="#venusTexture" position="-60 2 -100" scale="0.815 0.815 0.815" rotation="0 45 45"></a-sphere>
                <a-sphere src="#earthTexture" position="-40 2 -100" scale="3 3 3" rotation="0 45 45"></a-sphere>
                <a-sphere src="#marsTexture" position="-20 2 -100" scale="3 3 3" rotation="0 45 45"></a-sphere>
                <a-sphere src="#jupiterTexture" position="0 2 -100" scale="3 3 3" rotation="0 45 45"></a-sphere>
                <a-sphere src="#saturnTexture" position="20 2 -100" scale="3 3 3" rotation="0 45 45"></a-sphere>
                <a-sphere src="#uranusTexture" position="40 2 -100" scale="3 3 3" rotation="0 45 45"></a-sphere>
                <a-sphere src="#neptuneTexture" position="60 2 -100" scale="3 3 3" rotation="0 45 45"></a-sphere>
                <a-sphere src="#plutoTexture" position="80 2 -100" scale="3 3 3" rotation="0 45 45"></a-sphere>
                <a-sky src="#skyTexture"></a-sky>
            </a-scene>
        );
    }
}

export default Space;