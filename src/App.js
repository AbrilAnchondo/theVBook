import React from 'react';
import { Router, Link } from '@reach/router';
import Home from './components/Home';
import AllRecipes from './components/AllRecipes';
import RecipeDetails from './components/RecipeDetails';
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
        <RecipeContainer path="recipes">
          <AllRecipes path="/"/>
          <RecipeDetails path=":id" />
        </RecipeContainer>
      </Router>
    </div>
  );
}

export default App;
