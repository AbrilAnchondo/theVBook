import React from 'react';
import { Router, Link } from '@reach/router';
import Home from './components/Home';
import RecipeContainer from './components/RecipeContainer';


function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="recipes">Recipes</Link>
      </nav>
      <Router>
        <Home path="/" />
        <RecipeContainer path="/recipes" />
      </Router>
    </div>
  );
}

export default App;
