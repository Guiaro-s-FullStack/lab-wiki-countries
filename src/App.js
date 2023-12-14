import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import { CountriesDetails } from './components/CountriesDetails/CountriesDetails';



function App() {
  const [countries, setCountries] = useState([])

  const getCountries = async () => {
    try {
      const { data } = await axios.get("https://ih-countries-api.herokuapp.com/countries")
      setCountries(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])
  return (
    <div className="App">
      <NavBar />
      <div className="row">
        <CountriesList countries={countries} />
        <Routes>
          <Route path=":alpha3Code" element={<CountriesDetails countries={countries} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
