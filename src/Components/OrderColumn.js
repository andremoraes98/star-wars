import React, { useState, useContext } from 'react';
import ContextFilter from '../Context/ContextFilter';

function OrderColumn() {
  const { setOrder } = useContext(ContextFilter);

  const [column, setColumn] = useState('population');
  const [sort, setSort] = useState('ASC');

  const optionsArray = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  return (
    <div className="column-order">
      <label htmlFor="column-sort">
        Coluna:
        <select
          data-testid="column-sort"
          id="column-sort"
          value={ column }
          onChange={ ({ target }) => {
            setColumn(target.value);
          } }
        >
          {
            optionsArray.map((planet, index) => (
              <option key={ index }>{ planet }</option>
            ))
          }
        </select>
      </label>

      <div className="radio-buttons">
        <label
          htmlFor="column-sort-input-asc"
          className="radio"
        >
          Ascendente
          <input
            data-testid="column-sort-input-asc"
            name="sort-input"
            value="ASC"
            checked={ sort === 'ASC' }
            id="column-sort-input-asc"
            type="radio"
            onChange={ ({ target }) => {
              setSort(target.value);
            } }
          />
        </label>

        <label
          htmlFor="column-sort-input-desc"
          className="radio"
        >
          Descendente
          <input
            data-testid="column-sort-input-desc"
            name="sort-input"
            value="DESC"
            checked={ sort === 'DESC' }
            id="column-sort-input-desc"
            type="radio"
            onChange={ ({ target }) => {
              setSort(target.value);
            } }
          />
        </label>
      </div>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => {
          setOrder({
            column,
            sort,
          });
        } }
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrderColumn;
