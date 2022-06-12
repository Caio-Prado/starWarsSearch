import React from 'react';
import { BrowserRouter, Switch ,Route, NavLink } from 'react-router-dom'

import './App.css';
import Header from "./components/header/Header"
import Busca from './pages/busca/Busca';
import Characters from './pages/allCharacters/Characters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <NavLink to="/personagens" className="nav-link">Personagens</NavLink>
          <NavLink to="busca" className="nav-link">Busca</NavLink>
          <Switch>
            <Route exact path="/" component={ Characters } />
            <Route path="/personagens" component={ Characters } />
            <Route path="/busca" component={ Busca } />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
