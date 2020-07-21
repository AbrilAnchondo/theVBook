import React from 'react';

import Recipe from './Recipe';

const RecipeList = (props) => {
  const recipes = props.recipes;
  return (
    <div className="grid recipe-list">
      { recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />) }
    </div>
  )
}

export default RecipeList