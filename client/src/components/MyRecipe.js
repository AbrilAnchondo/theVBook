import React from 'react';
import MyRecipeDetails from './MyRecipeDetails';

//import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from '@reach/router';
import '../index.css';

const MyRecipe = ({ reDetails, id }) => {
  //console.log('reDetails: ',reDetails);
  //console.log('props id: ',id);
  //TODO:: fix size and refine card styling
  const imageUrl = `${reDetails.image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
  return (
    <div className='card' id={`card-${id}`}>
      <img src={imageUrl} className='card-img'></img>
      <span className='my-recipe-card-text'>{reDetails.title}</span>
      <Link to={`/myvbook/${id}`} state={{details: reDetails}}><span style={{'display': 'block', 'marginTop': '24px'}}><i class="fas fa-eye"></i></span></Link>
    </div>
  )
}

export default MyRecipe
