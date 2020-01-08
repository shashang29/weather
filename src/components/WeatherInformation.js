import React, { useState } from 'react';




 const WeatherInformation = ({imageUrl, weatherData}) => {
    
   return (
        <div>
            <h2 className='center'>Weather today for {weatherData.name}, {weatherData.sys.country}: {weatherData.weather[0].main}</h2>
            <div className='center weather-box bg-light-red'>
                <img src={imageUrl} alt='' height='150px' width='150px' />
                <div className=' center mt2 pa3 f5 '>
                    <p>Temperature: {parseFloat((weatherData.main.temp - 273.15)).toFixed(1)} °C</p>
                    <p>Feels like: {parseFloat((weatherData.main.feels_like - 273.15)).toFixed(1)} °C</p>
                    <p>Min: {parseFloat((weatherData.main.temp_min - 273.15)).toFixed(1)} °C</p>
                    <p>Max: {parseFloat((weatherData.main.temp_max - 273.15)).toFixed(1)} °C</p>
                    
                </div>
            </div>
        </div>
    )
}


export default WeatherInformation;
