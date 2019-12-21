import React, { useState, useEffect } from 'react';
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
    <div className="grid recipe-list">
        { recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />) }
    </div>
  )
}

export default AllRecipes