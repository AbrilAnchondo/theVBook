import React from 'react';

//import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from '@reach/router';
import '../index.css';

const MyRecipe = ({ reDetails, id }) => {
  console.log('reDetails: ',reDetails);
  console.log(reDetails.favorite);
  console.log(reDetails.category);
  //console.log('props id: ',id);
  //TODO:: fix size and refine card styling
  const imageUrl = `${reDetails.image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`

  const isFav = () => (
    reDetails.favorite ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>
  )
  return (
    <div className='card' id={`card-${id}`}>
      <img src={imageUrl} alt='' className='card-img'></img>
      <span className='my-recipe-card-text'>{reDetails.title}</span>
      <p>Category: {reDetails.category}</p>
      <p>{isFav()}</p>
      <Link to={`/myvbook/${id}`} state={{details: reDetails}}><span style={{'display': 'block', 'marginTop': '24px'}}><i className="fas fa-eye"></i></span></Link>
    </div>
  )
}

export default MyRecipe
