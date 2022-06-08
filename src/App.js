import React from 'react';
import './App.css';

import Header from "./components/header/Header"
import CardCharacters from './components/characters/CardCharacters';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
      <CardCharacters />
      <CardCharacters />
      <CardCharacters />
      <CardCharacters />
      </div>
    </div>
  );
}

export default App;
