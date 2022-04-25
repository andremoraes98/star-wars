import React, { useContext } from 'react';
import ContextFilter from '../Context/ContextFilter';
import ContextPlanets from '../Context/ContextPlanets';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { sortArrayASC } from '../helpers/sortArray';

function PlanetTable() {
  const filterContext = useContext(ContextFilter);
  const planetContext = useContext(ContextPlanets);

  const filteredOperadorPlanets = planetContext
    .filter((planet) => !filterContext.filterByNumericValues
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
      }).includes(false));

  const filteredNamePlanets = filterContext.filterByNumericValues.length === 0
    ? sortArrayASC(planetContext
      .filter((planet) => planet.name.includes(filterContext.filterByName.name)))
    : sortArrayASC(filteredOperadorPlanets
      .filter((planet) => planet.name.includes(filterContext.filterByName.name)));

  return (
    <table>
      <TableHead />
      <tbody>
        {
          filteredNamePlanets.map((planets, index) => (
            <TableRow
              planet={ planets }
              key={ index }
            />
          ))
        }
      </tbody>
    </table>
  );
}

export default PlanetTable;
