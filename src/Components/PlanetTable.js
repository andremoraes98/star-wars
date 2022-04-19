import React, { useContext } from 'react';
import ContextFilter from '../Context/ContextFilter';
import ContextPlanets from '../Context/ContextPlanets';
import TableHead from './TableHead';
import TableRow from './TableRow';

function PlanetTable() {
  const filterContext = useContext(ContextFilter);
  const planetContext = useContext(ContextPlanets);

  const filteredOperadorPlanets = planetContext
    .filter((planet) => filterContext.filterByNumericValues
      .map((filters) => {
        if (filters.comparison === 'maior que'
        && parseFloat(planet[filters.column]) > parseFloat(filters.value)) {
          return true;
        }
        if (filters.comparison === 'menor que'
        && (parseFloat(planet[filters.column]) < parseFloat(filters.value))) {
          return true;
        }
        if (filters.comparison === 'igual a'
        && parseFloat(planet[filters.column]) === parseFloat(filters.value)) {
          return true;
        }
        return false;
      })[0]);

  const filteredNamePlanets = filterContext.filterByNumericValues.length === 0
    ? planetContext
      .filter((planet) => planet.name.includes(filterContext.filterByName.name))
    : filteredOperadorPlanets
      .filter((planet) => planet.name.includes(filterContext.filterByName.name));

  return (
    <table>
      <TableHead />
      <tbody>
        {
          filterContext.filterByNumericValues.length === 0
            ? (filteredNamePlanets.map((planet, index) => (
              <TableRow
                planet={ planet }
                key={ index }
              />
            )))
            : (
              filteredNamePlanets.map((planets, index) => (
                <TableRow
                  planet={ planets }
                  key={ index }
                />
              ))
            )
        }
      </tbody>
    </table>
  );
}

export default PlanetTable;
