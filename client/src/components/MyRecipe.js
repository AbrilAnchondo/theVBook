import React from 'react';

import { Card, Image, Button, Icon } from 'semantic-ui-react';

import { Link } from '@reach/router';
import '../index.css';

const MyRecipe = ({ reDetails, id }) => {
  //TODO:: fix size and refine card styling
  const imageUrl = `${reDetails.image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`

  const isFav = () => (
    reDetails.favorite ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
  )
  
  return (
    <div>
      <Card>
        <Link to={`/myvbook/${id}`} state={{details: reDetails}}>
          <Image src={imageUrl} alt='' />
        </Link>
        <Card.Content>
          <Card.Header textAlign='center'>{reDetails.title}</Card.Header>
          <Card.Meta>Category: {reDetails.category.length === 0 ? 'none' : reDetails.category}</Card.Meta>
          <Card.Description>{isFav()}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
}

export default MyRecipe
