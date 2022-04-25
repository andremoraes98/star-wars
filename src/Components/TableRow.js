import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ planet }) {
  return (
    <tr>
      <td
        className="td-border"
        data-testid="planet-name"
      >
        { planet.name }
      </td>
      <td className="td-border">
        { planet.rotation_period }
      </td>
      <td className="td-border">
        { planet.orbital_period }
      </td>
      <td className="td-border">
        { planet.diameter }
      </td>
      <td className="td-border">
        { planet.climate }
      </td>
      <td className="td-border">
        { planet.gravity }
      </td>
      <td className="td-border">
        { planet.terrain }
      </td>
      <td className="td-border">
        { planet.surface_water }
      </td>
      <td className="td-border">
        { planet.population }
      </td>
      <td className="td-border">
        { planet.films }
      </td>
      <td className="td-border">
        { planet.created }
      </td>
      <td className="td-border">
        { planet.edited }
      </td>
      <td className="td-border">
        { planet.url }
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  planet: PropTypes.shape({
    climate: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
    gravity: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    residents: PropTypes.arrayOf(PropTypes.string).isRequired,
    rotation_period: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableRow;
