import React from 'react';




const WeatherInformation = ({ imageUrl, weatherData }) => {

    return (
        <div>
            <h2 className='center'>
            Weather today for {weatherData.name}, {weatherData.sys.country}:</h2>
            <strong className='f2'>{weatherData.weather[0].main}</strong>
            
            <div className='center'>
                <div className='center weather-box'>
                    <img className='bg-black ma3 mr2' src={imageUrl} alt='' height='180px' width='180px' />
                    <div className=' mt1'>
                        <p>Temperature: {parseFloat((weatherData.main.temp - 273.15)).toFixed(1)} °C</p>
                        <p>Feels like: {parseFloat((weatherData.main.feels_like - 273.15)).toFixed(1)} °C</p>
                        <p>Min: {parseFloat((weatherData.main.temp_min - 273.15)).toFixed(1)} °C</p>
                        <p>Max: {parseFloat((weatherData.main.temp_max - 273.15)).toFixed(1)} °C</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WeatherInformation;
