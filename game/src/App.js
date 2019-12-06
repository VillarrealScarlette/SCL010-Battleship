import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


//importando las vistas
import StartGame from './Views/StartGame';
import PlacingPieces from './Views/PlacingPieces';
import Game from './Views/Game';
import EndGame from './Views/EndGame';
 
const App=()=> {
  return (
    <Router>
      <div>
        <Redirect
            exact
            from="/"
            to="/StarGame" />
          <Switch>
            <Route
              path="/StarGame"
              component={StartGame} />
            <Route
              path="/Game"
              component={Game} />
               <Route
              path="/PlacingPieces"
              component={PlacingPieces} />
               <Route
              path="/EndGame"
              component={EndGame} />
          </Switch>
        </div>
      </Router>
  );
}
export default App;