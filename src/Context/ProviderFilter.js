import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextFilter from './ContextFilter';

function ProviderFilter({ children }) {
  const [name, setName] = useState('');
  const [filter, setFilter] = useState([]);

  const context = {
    filterByName: {
      name,
    },
    filterByNumericValues: filter,
    setName,
    setFilter,
  };

  return (
    <ContextFilter.Provider value={ context }>
      { children }
    </ContextFilter.Provider>
  );
}

ProviderFilter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProviderFilter;
