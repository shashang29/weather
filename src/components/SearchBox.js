import React, { useState } from 'react';
import WeatherInformation from './WeatherInformation';


const SearchBox = () => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [pending, setPending] = useState(false);
    const[error, setError]= useState('') 

    const onSearch = () => {
        if(input===''){
            setError('Location is required')
        }
        else{
        setPending(true);
        fetch('http://localhost:3001/api', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: input
            })
        })
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
                setPending('success');

                const imageUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
                setImageUrl(imageUrl);
            }).catch(err => console.log(err))
    }
}



    return (
        <div>
            <h1 className='mt5'>Search the weather</h1>
            <div className='center'>
            <h2 className="absolute black">{error}</h2>
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
                    <button className='tc pa3 grow f4 w-30 link bg-black white pointer' onClick={onSearch}>Search</button>
                     <h2 className="absolute">hello</h2>
                </div>
            </div>
            {pending === true ? <h1>Loading...</h1>
                : pending === 'success' ?
                    <WeatherInformation imageUrl={imageUrl} weatherData={weatherData} />
                    : <></>

            }

        </div>



    )

}


export default SearchBox;