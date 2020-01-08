import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';

const Ingredients = ({ ingredients }) => {
  //console.log("Ingredients from Ingredients Component",ingredients);
  let baseURL = 'https://spoonacular.com/cdn/ingredients_100x100/';
  return (
    <Fragment>
      <Header as='h2' dividing>Ingredients and Quantities</Header>
        {ingredients.map(ing => <img src={baseURL+ing.image} alt={""}/>)}
      <ul>
        {ingredients.map((ing, index) => <li key={index}>{ing.name} - {ing.quantity} {ing.unit}</li>)}
      </ul>
    </Fragment>
  )
}

export default Ingredients
