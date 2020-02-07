import React, { useState } from 'react';
import WeatherInformation from './WeatherInformation';


const SearchBox = () => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [request, setRequest] = useState({
        pending: false,
        error: false
    });


    const onSearch = () => {
        if (input === '') {
            setRequest({ error: 'Location is required' })
        }
        else {
            setRequest({ pending: true });
            fetch('https://cryptic-reef-62953.herokuapp.com/api', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    input: input
                })
            })
                .catch(err => console.log(err))
                .then(response=>{
                    if (!response.ok) {
                        return (
                            alert("Something went wrong. Please try again"))
                    } else {
                        return response.json()
                        
                    }
                })
                .then(response => {
                    if (response.message) {
                        setRequest({ error: response.message })
                    }
                    else {
                        const weatherData = response;
                        setWeatherData(response);
                        setRequest({ pending: 'success' });

                        const imageUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
                        setImageUrl(imageUrl);
                    }
                }).catch(err => console.log(err))
        }
    }



    return (
        <div>
            <h1 className='mt5'>Search the weather</h1>
            <div className='center '>
                <h2 className="absolute black">{request.error}</h2>
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
                        className='pa3 f4 w-70 h-100' />
                    <button className='tc pa3 grow f4 w-30 link bg-black white pointer' onClick={onSearch}>Search</button>
                </div>
            </div>
            {request.pending === true ? <h1>Loading...</h1>
                : request.pending === 'success' ?
                    <WeatherInformation imageUrl={imageUrl} weatherData={weatherData} />
                    : <></>

            }

        </div>



    )

}


export default SearchBox;