import React, { useEffect, useState, cloneElement } from 'react';



const SearchBox = () => {

    useEffect(() => {
        fetchWeather();
    }, []);

    const [temperature, setTemperature] = useState([]);
    const [weatherCondition, setWeatherCondition] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);

    const fetchWeather = async () => {
        const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=fb07371e9e8f6a6c53f85498e92dcea1');

        const response = await data.json();
        const temperature = Object.entries(response.main);
        temperature.length = 4;
        setTemperature(temperature);
        const weatherCondition = response.weather[0];
        setWeatherCondition(weatherCondition);
        const imageUrl =`http://openweathermap.org/img/wn/${weatherCondition.icon}@2x.png`;
        setImageUrl(imageUrl);
        console.log(imageUrl);
        console.log(weatherCondition);
        console.log(temperature);



    }
    return (
        <div>
            <h1>Search the weather</h1>
            <div className='center'>
                <div className='center form pa5 br2 shadow-3'>
                    <input type='text' placeholder='Type your location' className='pa3 f4 w-70' />
                    <button className='pa3 grow f4 w-30 link bg-black white'
                    > Search
                    </button>
                </div>
            </div>
            <h1 className='center'>Weather today: {weatherCondition.main}</h1>
            <div className='center'>
           <img src={imageUrl} alt='' height='200px' width='200px'/>
                <div className='weather-box mt2 pa3 f4 '>
                    {temperature.map(item => (
                        <p key={item[0]}>{item[0].toUpperCase()}: {parseFloat((item[1] - 273.15)).toFixed(1)} °C</p>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default SearchBox;