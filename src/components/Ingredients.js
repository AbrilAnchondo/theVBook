import React, { Fragment } from 'react';

const Ingredients = ({ ingredients }) => {
  return (
    <Fragment>
      <h1>Ingredients:</h1>
      <ul>
        {ingredients.map(ing => <li>{ing.name}</li>)}
      </ul>
    </Fragment>
  )
}

export default Ingredients
