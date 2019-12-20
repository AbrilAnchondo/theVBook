import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react'
import '../index.css'


const Recipe = (props) => {
  const { title, servings, image, readyInMinutes } =  props.recipe;
  let imageUrl = `https://spoonacular.com/recipeImages/${image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
 
  return (
    
      <Card>
        <Image src={imageUrl} ui={false} className="card-img"/>
        <Card.Content>
          <Card.Header>{title}l</Card.Header>
          <Card.Meta>{servings} Servings</Card.Meta>
          <Card.Description>
            Ready in {readyInMinutes} minutes
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          some other content here... 
        </Card.Content>
      </Card>
  
  ) 
}

export default Recipe

