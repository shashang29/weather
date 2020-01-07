import React, { useState } from 'react';



const SearchBox = () => {



    const [temperature, setTemperature] = useState([]);
    const [weatherCondition, setWeatherCondition] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [input, setInput] = useState('');
    const [searchStatus, setSearchStatus] = useState('');


    const onInputChange = (event) => {
        setInput(event.target.value);

    }
    const onSearch = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=fb07371e9e8f6a6c53f85498e92dcea1`)
            .catch(err => console.log(err))
            .then(response => {
                if (!response.ok) {
                  return (
                  alert("Could not find your location. Try again"))
                } else {
                  return response.json() 
                }})
            .catch(err => console.log(err))
            .then(response => {
                const temperature = Object.entries(response.main);
                temperature.length = 4;
                setTemperature(temperature);
                const weatherCondition = response.weather[0];
                setWeatherCondition(weatherCondition);
                const imageUrl = `http://openweathermap.org/img/wn/${weatherCondition.icon}@2x.png`;
                setImageUrl(imageUrl);
                console.log(imageUrl);
                console.log(weatherCondition);
                console.log(temperature);
                setSearchStatus('success');

            }).catch(err => console.log(err))



    }



    return (
        <div>
            <h1>Search the weather</h1>
            <div className='center'>

                <div className='center form pa5 br2 shadow-3'>
                    <input onChange={onInputChange} type='text' placeholder='Type your location' className='pa3 f4 w-70' />
                    <button className='pa3 grow f4 w-30 link bg-black white'
                        onClick={onSearch}> Search
                    </button>
                </div>
            </div>
        { (searchStatus === 'error')?
             <h3>Could not find your location. Try again</h3> : <></>
        }
            <div>
                <h1 className='center'>Weather today: {weatherCondition.main}</h1>
                <div className='center weather-box bg-light-red'>
                    <img src={imageUrl} alt='' height='150px' width='150px' />
                    <div className=' mt2 pa3 f5 '>
                        {temperature.map(item => (
                            <p key={item[0]}>{item[0].toUpperCase()}: {parseFloat((item[1] - 273.15)).toFixed(1)} °C</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )

}


export default SearchBox;