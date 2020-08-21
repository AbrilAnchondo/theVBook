import React  from 'react';
import { Router } from '@reach/router';

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

  return (
      <div>
        <div class='topnav' id='myTopnav'>
          <a href='/' >Home</a>
          <a href='recipes'>Recipes</a>
          <a href='/myvbook'>MyVBook</a>
          <a href='logout' style={{float: 'right'}}>Logout</a>
          <a href='login' style={{float: 'right'}}>Login</a>
          <a href='register' style={{float: 'right'}}>Register</a>
          <a href='javascript:void(0);' class="icon" onclick='myFunction()'>
            <i class='fa fa-bars'></i>
          </a>
        </div>

        <Router>
          <Home path='/' />
          <RecipeContainer path='recipes'>
            <AllRecipes path='/'/>
            <RecipeDetails path=':id'/>
          </RecipeContainer>
          <MyVBook path='/myvbook' />
          <MyRecipeDetails path='/myvbook/:id'/>
          <Register path='/register' />
          <Login path='/login' />
          <Logout path='/logout'/>
        </Router>
        {/* <Footer /> */}
      </div>
  );
}

export default App;
