import React, { Fragment } from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from '@reach/router';
import '../index.css';

const Recipe = (props) => {
  const { id, title, servings, image, readyInMinutes } =  props.recipe;

  let imageUrl = `https://spoonacular.com/recipeImages/${image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;

  return (
    <Fragment>
       <Card>
        <Image src={imageUrl} ui={false} className='card-img'/>
        <Card.Content>
          <Card.Header textAlign='left'>{title}</Card.Header>
          <Card.Meta>{servings} Servings</Card.Meta>
          <Card.Description>
            Ready in {readyInMinutes} minutes
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`${id}`} state={{ 
            image: `${image}`
            }}>
            <Button animated='vertical'size='medium'>
              <Button.Content visible>View</Button.Content>
              <Button.Content hidden>
                <Icon name='eye'/> 
              </Button.Content>
            </Button>
          </Link>
        </Card.Content>
      </Card>
      </Fragment>
  ) 
}

export default Recipe

