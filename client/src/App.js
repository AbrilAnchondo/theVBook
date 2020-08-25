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


const  App = () => {

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  const addResponsiveClass = () => {
    console.log('responsive');
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
      <div>
        <div className='topnav' id='myTopnav'>
          <a href='/' >Home</a>
          <a href='recipes'>Recipes</a>
          <a href='/myvbook'>MyVBook</a>
          <a href='logout' >Logout</a>
          <a href='login' >Login</a>
          <a href='register' >Register</a>
          <a href='#' className='icon' onClick={addResponsiveClass}>
            <i className='fa fa-bars'></i>
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
