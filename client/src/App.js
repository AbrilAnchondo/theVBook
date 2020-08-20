import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import { Menu } from 'semantic-ui-react';

import Home from './components/Home';
import AllRecipes from './components/AllRecipes';
import RecipeDetails from './components/RecipeDetails';
import RecipeContainer from './components/RecipeContainer';
import MyVBook from './components/MyVBook';
import MyRecipeDetails from './components/MyRecipeDetails';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Footer from './components/Footer';


function App() {
  const [activeItem, setActiveItem] = useState({});

  const handleItemClick = (e, {name}) => {
    setActiveItem({name})
  }

  return (
      <div>
        <div class="topnav" id="myTopnav">
          <a href="/" class="active">Home</a>
          <a href="recipes">Recipes</a>
          <a href="/myvbook">MyVBook</a>
          <a href="register">Register</a>
          <a href="login">Login</a>
          <a href="logout">Logout</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>

        <Router>
          <Home path="/" />
          <RecipeContainer path="recipes">
            <AllRecipes path="/"/>
            <RecipeDetails path=":id" />
          </RecipeContainer>
          <MyVBook path="/myvbook" />
          <MyRecipeDetails path="/myvbook/:id"/>
          <Register path="/register" />
          <Login path="/login" />
          <Logout path="/logout" style={{float: "right"}}/>
        </Router>
        {/* <Footer /> */}
      </div>
  );
}

export default App;
