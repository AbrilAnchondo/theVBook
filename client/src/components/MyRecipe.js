import React, { Fragment } from 'react';

//import { Card, Image, Button, Icon } from 'semantic-ui-react';
//import { Link } from '@reach/router';
import '../index.css';

const MyRecipe = ({ reDetails, id }) => {
  //console.log('reDetails: ',reDetails);
  //console.log('props id: ',id);
  const imageUrl = `${reDetails.image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
  return (
    <div className='card' id={`card-${id}`}>
      <img src={imageUrl} className='card-img'></img>
      <span>{reDetails.title}</span>
    </div>
  )
}

export default MyRecipe
