import React from 'react';

const Recipe = (props) => {
  const { title, servings, image } =  props.recipe;
 
  return (
    <div>
      <h3>{title}</h3>
      <p>{servings}</p>
      <img src={image} />
    </div>
  )
}
export default Recipe