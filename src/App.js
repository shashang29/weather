import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

//components
import Nav from './components/Nav';
import SearchBox from './components/SearchBox';
import WeatherMap from './components/WeatherMap';
import About from './components/About';

function App() {
    return (
        <Router>
        <div className="App background" >
            <Nav/>
            <Switch/>
            <Route exact path="/"  component={SearchBox} />
            <Route path="/weathermap" component={WeatherMap}/>
            <Route path="/about" component={About}/>
            <Switch/>

        </div>
        </Router>
    );
}

export default App;