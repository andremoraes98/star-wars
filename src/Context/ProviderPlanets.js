import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';

function ProviderPlanets({ children }) {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    setPlanets(data.results);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <ContextPlanets.Provider value={ planets }>
      { children }
    </ContextPlanets.Provider>
  );
}

ProviderPlanets.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ProviderPlanets;
