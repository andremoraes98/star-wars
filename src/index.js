import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProviderPlanets from './Context/ProviderPlanets';

ReactDOM.render(
  <ProviderPlanets>
    <App />
  </ProviderPlanets>, document.getElementById('root'),
);
