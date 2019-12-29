import React, { Fragment } from 'react';

const Ingredients = ({ ingredients }) => {
  console.log("Ingredients from Ingredients Component",ingredients);
  return (
    <Fragment>
      <h1>Ingredients and Quantities:</h1>
      <ul>
        
      </ul>
    </Fragment>
  )
}

export default Ingredients
