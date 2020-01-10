import React from 'react';

const About = () => {
    return (
        <div className='about-box mt5 mr5 ml5 pa2'>
            <h1 className='f1 ma2'>About</h1>
            <p className='f2 pa5 pt3'>This project has been made using React library. 
            The routing is handled by React router.
            The weather information is received from Open weather map API. 
            The map is fetched using Leaflet library and weather layers called from Open weather API. 
            The stylying is done using CSS and tachyons framework. </p>
        </div>
    )
}

export default About;