import React, { Fragment } from 'react';

const Ingredients = ({ ingredients }) => {
  //console.log("Ingredients from Ingredients Component",ingredients);
  return (
    <Fragment>
      <h1>Ingredients and Quantities:</h1>
      <ul>
        {ingredients.map((ing, index) => <li key={index}>{ing.name} - {ing.quantity} {ing.unit}</li>)}
        
      </ul>
    </Fragment>
  )
}

export default Ingredients
