import React from 'react';
import { Router, Link } from '@reach/router';

import Home from './components/Home';
import AllRecipes from './components/AllRecipes';
import RecipeDetails from './components/RecipeDetails';
import RecipeContainer from './components/RecipeContainer';


function App() {

  return (

    <div>

      <ul className="topnav">
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="recipes">Recipes</Link></li>
      </ul>

      <Router>
        <Home path="/" />
        <RecipeContainer path="recipes">
          <AllRecipes path="/"/>
          <RecipeDetails path=":id" />
        </RecipeContainer>
      </Router>

      <div className="footer">
        Copyright &copy; 2020
      </div>
    </div>
  );
}

export default App;
