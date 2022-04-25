import React, { useState, useContext } from 'react';
import ContextFilter from '../Context/ContextFilter';
import logo from '../image/projectIntro.gif';
import ColumnFilter from './ColumnFilter';
import OrderColumn from './OrderColumn';

function FilterSection() {
  const { setName,
    setFilter,
    filterByNumericValues,
    setOrder } = useContext(ContextFilter);
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

  const removeFilter = ({ target }) => {
    const { parentElement: { firstChild: { id: filterName } } } = target;
    setFilter(filterByNumericValues.filter((filter) => filterName !== filter.column));
  };

  return (
    <section>
      <img
        src={ logo }
        alt="Star-Wars-Logo"
      />

      <div className="first-filter">
        <div>
          <label
            htmlFor="name-filter"
            id="input-name"
          >
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

          <div className="column-filter">
            <ColumnFilter
              renderArrayOptions={ renderArrayOptions }
              setColumnValue={ setColumnValue }
              columnValue={ columnValue }
              setComparisonValue={ setComparisonValue }
              comparisonValue={ comparisonValue }
              setQuantityValue={ setQuantityValue }
              quantityValue={ quantityValue }
            />
          </div>

        </div>
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
      </div>

      <hr />

      <OrderColumn />

      <hr />

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => {
          setFilter([]);
          setOrder({
            column: 'name',
            sort: 'ASC',
          });
        } }
      >
        Limpar Filtros
      </button>
      { filterByNumericValues.map((choice) => (
        <div
          data-testid="filter"
          key={ choice.value }
        >
          <span id={ choice.column }>{`${choice.column}, ` }</span>
          <span>{`${choice.comparison} e valor ` }</span>
          <span>{`${choice.value}.` }</span>
          <button
            type="button"
            onClick={ removeFilter }
          >
            x
          </button>
        </div>
      )) }
    </section>
  );
}

export default FilterSection;
