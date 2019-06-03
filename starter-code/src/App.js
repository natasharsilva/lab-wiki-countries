import React, { Component } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom'
import './App.css';
import CountryDetail from './CountryDetail'
import jsonCountries from './countries.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">WikiCountries</Link>
        </div>
        </nav>
        <div className="container">
        <div className="row">
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <div className="list-group">
        {jsonCountries.map((country, i) => (<NavLink to={"/"+country.cca3} className="list-group-item list-group-item-action" key={i}>{country.flag} {country.name.common}</NavLink>))}
        </div>
        </div>
          <div className='col-7'>
          <Switch>
          <Route path="/:countryId" component={CountryDetail} />
          {/* <Route render={props => <h2>404</h2>} /> */}
          </Switch>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
