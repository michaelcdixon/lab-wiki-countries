import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <Switch>
              <Route exact path="/countries-list" component={CountriesList} />
              <Route exact path="/country/:id" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
