import React, { useState, useContext } from 'react';
import ContextFilter from '../Context/ContextFilter';

function FilterSection() {
  const { setName, setFilter, filterByNumericValues } = useContext(ContextFilter);
  const [nameValue, setNameValue] = useState('');
  const [columnValue, setColumnValue] = useState('population');
  const [comparisonValue, setComparisonValue] = useState('maior que');
  const [quantityValue, setQuantityValue] = useState(0);
  const optionsArray = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const renderArrayOptions = optionsArray
    .filter((choice) => !filterByNumericValues
      .map((filter) => filter.column === choice).includes(true));

  return (
    <>
      <label htmlFor="name-filter">
        Name:
        <input
          type="text"
          data-testid="name-filter"
          id="name-filter"
          value={ nameValue }
          onChange={ ({ target }) => {
            setNameValue(target.value);
            setName(target.value);
          } }
        />
      </label>

      <label htmlFor="column-filter">
        Coluna:
        <select
          data-testid="column-filter"
          id="column-filter"
          value={ columnValue }
          onChange={ ({ target }) => {
            setColumnValue(target.value);
          } }
        >
          { renderArrayOptions
            .map((choice) => <option key={ choice }>{ choice }</option>) }
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Operador:
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          value={ comparisonValue }
          onChange={ ({ target }) => {
            setComparisonValue(target.value);
          } }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        Quantidade:
        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
          value={ quantityValue }
          onChange={ ({ target }) => {
            setQuantityValue(target.value);
          } }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilter((prevState) => ([...prevState, {
          column: columnValue,
          comparison: comparisonValue,
          value: quantityValue,
        }])) }
      >
        Filtrar
      </button>
    </>
  );
}

export default FilterSection;
