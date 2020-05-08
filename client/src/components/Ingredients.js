import React from 'react';
import { List, Image, Divider } from 'semantic-ui-react';

const Ingredients = ({ ingredients }) => {
  let baseURL = 'https://spoonacular.com/cdn/ingredients_100x100/';
  return (
    <List size="huge">
      <h2>Ingredients you'll need</h2>
      <List.Item >
        {
        ingredients.map((ing,index) => <List><List.Item><Image avatar key={index} src={baseURL+ing.image} alt={""}/><List.Content><List.Header>{ing.name}</List.Header></List.Content></List.Item><Divider /></List>)
        }
      </List.Item>
    </List>

  
  )
}

export default Ingredients
 
 