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
       {/* <Menu inverted>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          >
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item
            name='recipes'
            active={activeItem === 'recipes'}
            onClick={handleItemClick}
          >
            <Link to="recipes">Recipes</Link>
          </Menu.Item>

          <Menu.Item
            name='myVBook'
            active={activeItem === 'myVBook'}
            onClick={handleItemClick}
          >
            <Link to="/myvbook">MyVBook</Link>
          </Menu.Item>

          <Menu.Menu position='right'></Menu.Menu>
          
          <Menu.Item
            name='register'
            active={activeItem === 'register'}
            onClick={handleItemClick}
          >
            <Link to="register">Register</Link>
          </Menu.Item>

          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
          >
            <Link to="login">Login</Link>
          </Menu.Item>
          
          <Menu.Item 
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          >
            <Link to="logout">Logout</Link>
          </Menu.Item>
        </Menu> */}

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
