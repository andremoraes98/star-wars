import React, { useContext } from 'react';
import ContextFilter from '../Context/ContextFilter';
import ContextPlanets from '../Context/ContextPlanets';

function PlanetTable() {
  const planetContext = useContext(ContextPlanets);
  const filterContext = useContext(ContextFilter);

  const filteredNamePlanets = planetContext
    .filter((planet) => planet.name.includes(filterContext.filterByName.name));

  const filteredOperadorPlanets = filteredNamePlanets
    .filter((planet) => filterContext.filterByNumericValues
      .map((filters) => {
        if (filters.comparison === 'maior que'
          && planet[filters.column] > filters.value) {
          return true;
        }
        if (filters.comparison === 'menor que'
        && (planet[filters.column] < filters.value
          || planet[filters.column] === 'unknown')) {
          return true;
        }
        if (filters.comparison === 'igual a'
        && planet[filters.column] === filters.value) {
          return true;
        }
        return false;
      })[0]);
  console.log(filteredOperadorPlanets);

  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Rotation Period
          </th>
          <th>
            Orbital Period
          </th>
          <th>
            Diameter
          </th>
          <th>
            Climate
          </th>
          <th>
            Gravity
          </th>
          <th>
            Terrain
          </th>
          <th>
            Surface Water
          </th>
          <th>
            Population
          </th>
          <th>
            Films
          </th>
          <th>
            Created
          </th>
          <th>
            Edited
          </th>
          <th>
            URL
          </th>
        </tr>
      </thead>
      <tbody>
        {
          filteredOperadorPlanets.map((planet, index) => (
            <tr key={ index }>
              <td>
                { planet.name }
              </td>
              <td>
                { planet.rotation_period }
              </td>
              <td>
                { planet.orbital_period }
              </td>
              <td>
                { planet.diameter }
              </td>
              <td>
                { planet.climate }
              </td>
              <td>
                { planet.gravity }
              </td>
              <td>
                { planet.terrain }
              </td>
              <td>
                { planet.surface_water }
              </td>
              <td>
                { planet.population }
              </td>
              <td>
                { planet.films }
              </td>
              <td>
                { planet.created }
              </td>
              <td>
                { planet.edited }
              </td>
              <td>
                { planet.url }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default PlanetTable;
