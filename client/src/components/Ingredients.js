import React from 'react';
import { List, Image, Divider } from 'semantic-ui-react';

const Ingredients = ({ ingredients }) => {
  let baseURL = 'https://spoonacular.com/cdn/ingredients_100x100/';
  console.log("ingredient list:", ingredients);
  return (
      <div>
        <h2  className='h2-header'>Ingredients</h2>
        <List size="large">
          <List.Item >
            {
            ingredients.map((ing,index) => <List><List.Item><Image avatar key={index} src={baseURL+ing.image} alt={""}/><List.Content><List.Header><h2 className='h2-header'>{ing.name} / {ing.amount} {ing.unit}</h2></List.Header></List.Content></List.Item><Divider /></List>)
            }
          </List.Item>
       </List>
      </div>
  )
}

export default Ingredients
 
 