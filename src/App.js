import React from 'react';
import './App.css';
import PlanetTable from './Components/PlanetTable';
import ProviderPlanets from './Context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <PlanetTable />
    </ProviderPlanets>
  );
}

export default App;
