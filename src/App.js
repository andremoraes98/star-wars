import React from 'react';
import './App.css';
import PlanetTable from './Components/PlanetTable';
import FilterSection from './Components/FilterSection';
import ProviderFilter from './Context/ProviderFilter';
import ProviderPlanets from './Context/ProviderPlanets';

function App() {
  return (
    <ProviderFilter>
      <ProviderPlanets>
        <FilterSection />
        <PlanetTable />
      </ProviderPlanets>
    </ProviderFilter>
  );
}

export default App;
