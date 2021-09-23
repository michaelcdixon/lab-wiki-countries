import React from 'react';
import { NavLink } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  const bananas = { maxHeight: '880px', maxWidth: '400px', overflow: 'scroll' };

  return (
    <>
      <h3>Countries</h3>
      <div className="col-5" style={bananas}>
        <div className="list-group">
          <ul>
            {countries.map((country, index) => {
              return (
                <li key={index}>
                  <img
                    src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
                    alt=""
                  />
                  <NavLink exact to={`/country/${country.alpha3Code}`}>
                    {country.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CountriesList;
