import React, { useState, useEffect, Fragment } from 'react';
import Options from './Options';
import Recipe from './Recipe';
import '../index.css';


const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('');
  const [intolerances, setIntolerances] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => { 
      const response = await fetch(`https://api.spoonacular.com/recipes/search?cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&number=20&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const data = await response.json();
      const results = data.results;
      setRecipes(results);
     
    }
    fetchRecipes();
  }, [cuisine,diet,intolerances]);

  const onCuisineChange = (e, { value }) => {
    setCuisine(value);
  }

  const onDietChange = (e, { value }) => {
    setDiet(value);
  }
  
  const onIntolerancesChange = (e, { value }) => {
    setIntolerances(value);
  }

  return (
    <Fragment>
      <Options 
        cuisine={cuisine} 
        onCuisineChange={onCuisineChange} 
        diet={diet} 
        onDietChange={onDietChange}
        intolerances={intolerances}
        onIntolerancesChange={onIntolerancesChange}
      />
      <div className="grid recipe-list">
          { recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />) }
      </div>
    </Fragment>
  )
}

export default AllRecipes