import React, { Fragment } from 'react';
import { List, Image } from 'semantic-ui-react';

const Ingredients = ({ ingredients }) => {
  //console.log("Ingredients from Ingredients Component",ingredients);
  let baseURL = 'https://spoonacular.com/cdn/ingredients_100x100/';
  console.log('ingredients', ingredients);
  return (
    <List celled>
      <List.Item>
        {
        ingredients.map((ing,index) => <List celled><List.Item><Image avatar key={index} src={baseURL+ing.image} alt={""}/><List.Content><List.Header>{ing.name}</List.Header></List.Content></List.Item></List>)
        }
      </List.Item>
    </List>

  
  )
}

export default Ingredients
 
 