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
                        <p>Temperature: {(weatherData.main.temp)} °C</p>
                        <p>Feels like: {(weatherData.main.feels_like)} °C</p>
                        <p>Min: {(weatherData.main.temp_min)} °C</p>
                        <p>Max: {(weatherData.main.temp_max)} °C</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WeatherInformation;
