import React, { useEffect, useState, cloneElement } from 'react';



const SearchBox = () => {

    useEffect(() => {
        fetchWeather();
    }, []);

    const [temperature, setTemperature] = useState([]);

    const fetchWeather = async () => {
        const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=fb07371e9e8f6a6c53f85498e92dcea1');

        const response = await data.json();
        const temperature = Object.entries(response.main)
        temperature.length = 4;
        console.log(temperature)
        setTemperature(temperature);


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
            <div className='center'>
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