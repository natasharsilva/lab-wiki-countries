import React from 'react'
import jsonCountries from './countries.json'
import { NavLink, Redirect } from 'react-router-dom'

export default function CountryDetail(props) {
    // function getCountryFromCca3(cca3) {
    //  return jsonCountries.find(c => c.cca3 === cca3)
    // }
    // let cca3 = props.match.params.cca3
    let country = jsonCountries.find(country => country.cca3 === props.match.params.countryId)

    if (!country) {
      // Solution 1 - display an error message
      // return <div>Sorry, there's no country with that name</div>
      // Solution 2 - redirect the user to the homepage
      return <Redirect to="/" />
    }

    return (
      <div className="countryDetail">
      <h2>{country.name.common}</h2>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
          <td>Capital</td>
          <td>{country.capital.join(', ')}</td>
          </tr>
          <tr>
          <td>Area</td>
          <td>{country.area} km<sup>2</sup></td>
          </tr>
          <tr>
          <td>Borders</td>
          <td>
          <ul>
          {country.borders.length === 0 ? 'There are no bordering countries' : country.borders.map((border, i) => (<li key={i}><NavLink to={"/"+border} key={i}>{(jsonCountries.find(country => country.cca3 === border)).name.common}</NavLink></li>))}
          </ul>
          </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
}
