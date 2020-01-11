import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer } from 'react-leaflet';

const WeatherMap = () => {

    const [displayMap, setDisplayMap] = useState();
    const position = [28.505, 84.12];
    const handleChange = (event) => {
        setDisplayMap(event.target.value);
    }

    return (
        <div>
            <h2>Displaying map for:</h2>
            <div className='center'>

                <select id="types" className="pa5 h2 f5" onChange={handleChange}>
                    <option value="">Select a map</option>
                    <option label="Temperature" value="temp_new" />
                    <option label="Clouds" value="clouds_new">Space Type</option>
                    <option label="Percipitation" value="precipitation_new">Space Type</option>
                    <option label="Sea level pressure" value="pressure_new">Space Type</option>
                    <option label="Wind speed" value="wind_new">Space Type</option>
                </select>

            </div>
            <Map className='map center mt5' center={position} zoom={2}  >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"

                />
                {displayMap &&
                    <TileLayer
                        url={`https://tile.openweathermap.org/map/${displayMap}/{z}/{x}/{y}.png?&appid=fb07371e9e8f6a6c53f85498e92dcea1`}
                    />
        
                }
            </Map>
        </div>
    )
}

export default WeatherMap;