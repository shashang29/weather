import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const WeatherMap = () => {

    const [displayMap, setDisplayMap] = useState();
    const position = [28.505, 84.12];
    const handleChange = (event) => {

    }

    return (
        <div>
            <h2>Displaying map for:</h2>
            <div className='center'>
                <div class="hide-child absolute ba pa2 center">Select an option
            <select id="types" class="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="">
                        <option value="">All Types</option>
                        <option label="Music" value="2">Space Type
  </option>
                        <option label="Photography" value="12">Space Type
  </option>
                        <option label="Film" value="22">Space Type
  </option>
                        <option label="Visual Art" value="32">Space Type
  </option>
                        <option label="Performance" value="42">Space Type
  </option>
                        <option label="Workshop" value="52">Space Type
  </option>
                        <option label="Event" value="62">Space Type
  </option>
                        <option label="Co-Working" value="72">Space Type
  </option>
                    </select>
                </div>
            </div>
            <Map className='map center mt5' center={position} zoom={2}  >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"

                />

                {(displayMap) ? <TileLayer
                    url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?&appid=fb07371e9e8f6a6c53f85498e92dcea1"


                /> :
                    null

                }

                <Marker position={position}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        </div>
    )
}

export default WeatherMap;