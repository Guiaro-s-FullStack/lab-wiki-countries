import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { alpha3Code } = useParams();

  return <div className="col-7">{alpha3Code}</div>;
};

export default CountryDetails;
