import React from 'react'
import { Link } from 'react-router-dom'



const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <ul>
              <Link to={`/${country.alpha3Code}`}
                key={country.alpha3Code}
                className="list-group-item list-group-item-action">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  style={{ width: '50px' }} />
                <p>{country.name.common}</p>
              </Link>
            </ul>
          )

        })}
      </div>
    </div>
  )
}

export default CountriesList
