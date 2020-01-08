import React, { useState } from 'react';
import WeatherInformation from './WeatherInformation';


const SearchBox = () => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [weatherData, setWeatherData] = useState();


    const onSearch = () => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=fb07371e9e8f6a6c53f85498e92dcea1`)
            .catch(err => console.log(err))
            .then(response => {
                if (!response.ok) {
                    return (
                        alert("Could not find your location. Try again"))
                } else {
                    return response.json()
                }
            })
            .catch(err => console.log(err))
            .then(response => {
                const weatherData = response;
                setWeatherData(response);

                const imageUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
                setImageUrl(imageUrl);
                console.log(weatherData)
                console.log(imageUrl);
            }).catch(err => console.log(err))
    }



    return (
        <div>
            <h1 className='mt5'>Search the weather</h1>
            <div className='center'>
                <div className='center form pa5 br2 shadow-3'>
                    <input
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                onSearch();
                            }
                        }}
                        onChange={(event => setInput(event.target.value))}
                        type='text'
                        value={input} placeholder='Type your location'
                        className='pa3 f4 w-70' />
                    <button className='pa3 grow f4 w-30 link bg-black white'
                        onClick={onSearch}> Search
                    </button>
                </div>

            </div>
            {(weatherData) ? <WeatherInformation imageUrl={imageUrl} weatherData={weatherData} />
                : <></>
            }

        </div>



    )

}


export default SearchBox;