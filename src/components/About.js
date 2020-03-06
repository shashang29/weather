import React from 'react';

const About = () => {
    return (
        <div className='center mt3'>
            <div className='about-box pa2'>
                <h1 className='ma0'>About</h1>
                <p> This project has been made using React library.
                    The routing is handled by React router.
                    The weather information is received from Open weather map API.
                    The map is fetched using Leaflet library and weather layers called from Open weather API.
                    The stylying is done using CSS and tachyons framework. Route-based code splitting has been implemented using React lazy to improve page-load time facilitating
performance optimization </p>
            </div>

        </div>
    )
}

export default About;