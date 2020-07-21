import React from 'react';

import { Link } from '@reach/router';
import '../index.css';

const MyRecipe = ({ reDetails, id }) => {
  //TODO:: fix size and refine card styling
  const imageUrl = `${reDetails.image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`

  const isFav = () => (
    reDetails.favorite ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
  )
  
  return (
    <div className='card' id={`card-${id}`}>
      <img src={imageUrl} alt='' className='card-img'></img>
      <span className='my-recipe-card-text'>{reDetails.title}</span>
      <p>Category: {reDetails.category.length === 0 ? 'none' : reDetails.category}</p>
      <p>{isFav()}</p>
      <Link to={`/myvbook/${id}`} state={{details: reDetails}}><span style={{'display': 'block', 'marginTop': '24px'}}><i className="fas fa-eye"></i></span></Link>
    </div>
  )
}

export default MyRecipe
