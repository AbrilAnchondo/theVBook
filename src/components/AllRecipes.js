import React, { useState, useEffect, Fragment } from 'react';
import Options from './Options';
import Recipe from './Recipe';
import '../index.css';


const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => { 
      const response = await fetch(`https://api.spoonacular.com/recipes/search?diet=vegan&number=20&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const data = await response.json();
      const results = data.results;
      setRecipes(results);
     
    }
    fetchRecipes();
  }, []);

  return (
    <Fragment>
      <Options />
      <div className="grid recipe-list">
          { recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />) }
      </div>
    </Fragment>
  )
}

export default AllRecipes