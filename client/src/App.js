import React  from 'react';
import { Router, Link } from '@reach/router';

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
          <Link to='/' >Home</Link>
          <Link to='recipes'>Recipes</Link>
          <Link to='myvbook'>MyVBook</Link>
          <Link to='logout' >Logout</Link>
          <Link to='login' >Login</Link>
          <Link to='register' >Register</Link>
          <Link to='#' className='icon' onClick={addResponsiveClass}>
            <i className='fa fa-bars'></i>
          </Link>
        </div>

        <Router>
          <Home path='/' />
          <RecipeContainer path='recipes'>
            <AllRecipes path='/'/>
            <RecipeDetails path=':id'/>
          </RecipeContainer>
          <MyVBook path='/myvbook'/>
          <MyRecipeDetails path='/myvbook/:id'/>
          <Register path='register' />
          <Login path='login' />
          <Logout path='logout'/>
        </Router>
        <Footer />
      </div>
  );
}

export default App;
