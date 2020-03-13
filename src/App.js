import React from 'react';
import './App.css';
import Search from './Search';
import Results from './Results';

function App() {
  return (
    <div className="App">
    <h1>Star Wars Search</h1>
    <div className="starWarsSearch">
      <p>
        Enter any character name below to display matches.
      </p>
      <Search />
      <Results />
    </div>
    </div>
  );
}

export default App;
