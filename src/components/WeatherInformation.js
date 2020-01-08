import React, { useState } from 'react';




 const WeatherInformation = ({imageUrl, weatherData}) => {
    // const temperature = Object.entries(response.main);
    // temperature.length = 4;
    // setTemperature(temperature);
    // const weatherCondition = response.weather[0];
    // setWeatherCondition(weatherCondition);
   



    return (
        <div>
            <h1 className='center'>Weather today: {}</h1>
            <div className='center weather-box bg-light-red'>
                <img src={imageUrl} alt='' height='150px' width='150px' />
                <div className=' mt2 pa3 f5 '>
                    {/* {temperature.map(item => (
                        <p key={item[0]}>{item[0].toUpperCase()}: {parseFloat((item[1] - 273.15)).toFixed(1)} °C</p> */}
                    ))}
                </div>
            </div>
        </div>
    )
}


export default WeatherInformation;
