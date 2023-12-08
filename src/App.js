import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCountries = async () => {
    try {
      const { data } = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const getCountries = () => {
  //   axios
  //     .get('https://ih-countries-api.herokuapp.com/countries')
  //     .then(({ data }) => {
  //       setCountries(data);
  //       setLoading(false);
  //     });
  // };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <NavBar />
      {!loading ? (
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Routes>
              <Route
                path=":alpha3Code"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      ) : (
        <div>LOADING....</div>
      )}
    </>
  );
};

export default App;
