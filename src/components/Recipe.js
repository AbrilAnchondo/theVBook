import React from 'react';

const Recipe = (props) => {
  const { title, servings, image } =  props.recipe;
  let baseImageUrl = `https://spoonacular.com/recipeImages/${image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
 
  return (
    <div>
      <h3>{title}</h3>
      <p>{servings}</p>
      <img src={baseImageUrl} />
    </div>
  )
}
export default Recipe