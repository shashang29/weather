import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Nav from './components/Nav';
import SearchBox from './components/SearchBox';
const WeatherMap = lazy(() => import('./components/WeatherMap'));
const About = lazy(() => import('./components/About'));


function App() {
    return (
        <Router>
            <div className="App" >
                <Nav />
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch />
                    <Route exact path="/" component={SearchBox} />
                    <Route path="/weathermap" component={WeatherMap} />
                    <Route path="/about" component={About} />
                    <Switch />
                </Suspense>
            </div>
        </Router>
    );
}

export default App;