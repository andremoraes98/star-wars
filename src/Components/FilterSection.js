import React, { useState, useContext } from 'react';
import ContextFilter from '../Context/ContextFilter';

function FilterSection() {
  const contextFilter = useContext(ContextFilter);
  const [nameValue, setNameValue] = useState('');

  return (
    <label htmlFor="name-filter">
      Name:
      <input
        type="text"
        data-testid="name-filter"
        id="name-filter"
        value={ nameValue }
        onChange={ ({ target }) => {
          setNameValue(target.value);
          contextFilter.setName(target.value);
        } }
      />
    </label>
  );
}

export default FilterSection;
