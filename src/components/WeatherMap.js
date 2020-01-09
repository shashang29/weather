import React, { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const WeatherMap = () => {

    
    const position = [28.505, 84.12];

    return (
        <Map className='map center mt5' center={position} zoom={2}>
        <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
        <TileLayer
          url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=fb07371e9e8f6a6c53f85498e92dcea1"
          
          
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    )
}

export default WeatherMap;