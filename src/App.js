import React from 'react';
import './App.css';
import { MoviesGrid } from './components/MoviesGrid/main';
// import './AppNormalize.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='title'>Movies</h1>
      </header>
      
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}

export default App;
