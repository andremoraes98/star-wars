import React from 'react';
import PropTypes from 'prop-types';

function ColumnFilter({
  renderArrayOptions,
  setColumnValue,
  columnValue,
  setComparisonValue,
  comparisonValue,
  setQuantityValue,
  quantityValue }) {
  return (
    <>
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
          className="number"
        />
      </label>
    </>
  );
}

ColumnFilter.propTypes = {
  renderArrayOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setColumnValue: PropTypes.func.isRequired,
  columnValue: PropTypes.string.isRequired,
  setComparisonValue: PropTypes.func.isRequired,
  comparisonValue: PropTypes.string.isRequired,
  setQuantityValue: PropTypes.func.isRequired,
  quantityValue: PropTypes.number.isRequired,
};

export default ColumnFilter;
