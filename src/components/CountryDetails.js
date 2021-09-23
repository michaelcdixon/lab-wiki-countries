import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import countries from '../countries.json';

function CountryDetails(props) {
  const [country, setCountry] = useState(countries[0]);

  const bananas = { maxWidth: '350px' };

  useEffect(() => {
    const countryId = props.match.params.id;
    const foundCountry = countries.find(
      (country) => country.alpha3Code === countryId
    );

    console.log(foundCountry);
    setCountry(foundCountry);
  }, [props.match.params.id]);

  return (
    <>
      <div className="col-7">
        <img
          style={bananas}
          src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
          alt="country flag"
        />
        <h1>{country.name}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((border, index) => {
                    return (
                      <li key={index}>
                        <NavLink exact to={`/country/${border}`}>
                          {border}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CountryDetails;
