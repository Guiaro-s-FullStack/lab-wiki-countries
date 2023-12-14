import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export const CountriesDetails = ({ countries }) => {
    const { alpha3Code } = useParams()
    const [country, setCountry] = useState()

    const getUrl = async () => {
        try {

            const { data } = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
            setCountry(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUrl()
    }, [alpha3Code])
    return (
        <div className="col-7">
            <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country?.alpha2Code?.toLowerCase()}.png`}
            />
            <h1>{country?.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{country?.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country?.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country?.borders?.map((border, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={`/${border}`}>
                                                {
                                                    countries.find(
                                                        (country) => country.alpha3Code === border
                                                    ).name.common
                                                }
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
