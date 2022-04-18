import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextFilter from './ContextFilter';

function ProviderFilter({ children }) {
  const [name, setName] = useState('');
  const context = {
    filterByName: {
      name,
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
    setName,
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
