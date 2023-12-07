import React from 'react';
import { NavLink } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <>
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {countries.map((country) => {
            return (
              <NavLink
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
                key={country.alpha3Code}
                style={{ textAlign: 'center' }}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  style={{ width: '50px' }}
                />
                <p>{country.name.common}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CountriesList;
