import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Styles Import
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Pages Import
import NavBar from './Components/Header/NavBar';
import Home from './pages/Home';
import Destinations from './pages/Destinations.js';
import Rooms from './pages/Rooms.js';
import Pricing from './pages/Pricing.js';
import About from './pages/About.js';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
