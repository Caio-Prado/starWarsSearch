import React from 'react';
import './App.css';

import Header from "./components/header/Header"

import AllCharacters from './pages/allCharacters/Characters';

function App() {
  return (
    <div className="App">
      <Header />
      <AllCharacters />
    </div>
  );
}

export default App;
