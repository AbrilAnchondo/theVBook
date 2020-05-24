import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import { Menu } from 'semantic-ui-react';

import Home from './components/Home';
import AllRecipes from './components/AllRecipes';
import RecipeDetails from './components/RecipeDetails';
import RecipeContainer from './components/RecipeContainer';
import MyVBook from './components/MyVBook';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';


function App() {
  const [activeItem, setActiveItem] = useState({});

  const handleItemClick = (e, {name}) => {
    setActiveItem({name})
  }

  return (

    
      <div className="navbar">
        
        <Menu inverted >
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
        </Menu>

        <Router>
          <Home path="/" />
          <RecipeContainer path="recipes">
            <AllRecipes path="/"/>
            <RecipeDetails path=":id" />
          </RecipeContainer>
          <MyVBook path="/myvbook" />
          <RecipeDetails path="/myvbook/:id" />
          <Register path="/register" />
          <Login path="/login" />
          <Logout path="/logout" style={{float: "right"}}/>
        </Router>

      </div>
        
    
    
  );
}

export default App;
