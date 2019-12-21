import React, { Fragment } from 'react';
import { Card, Image, Button, Icon, Label } from 'semantic-ui-react';
import { Link } from '@reach/router';
import '../index.css';


const Recipe = (props) => {
  const { id, title, servings, image, readyInMinutes } =  props.recipe;
  let imageUrl = `https://spoonacular.com/recipeImages/${image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
  console.log(id);
  return (
    <Fragment>
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
          <Link to={`${id}`}>
            <Button animated="vertical" inverted color='black'>
              <Button.Content visible>View</Button.Content>
              <Button.Content hidden>
                <Icon name='eye'/> 
              </Button.Content>
            </Button>
          </Link>
            <Button as='div' labelPosition='right'>
             <Button color='green' size="mini">
              <Icon name='heart' />
              
            </Button>
            <Label as='a' basic color='green' pointing='left'>
              0
            </Label>
          </Button>
        </Card.Content>
      </Card>
      </Fragment>
  
  ) 
}

export default Recipe

