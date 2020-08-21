import React from 'react';

import { Card, Image } from 'semantic-ui-react';

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
      <Card style={{borderRadius: '8px',
        margin: '15px',
        boxShadow: '0 4px 8px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}>
        <Link to={`/myvbook/${id}`} state={{details: reDetails}}>
          <Image src={imageUrl} alt='' className='mycard-img'/>
        </Link>
        <div className='mycard-info'>
          <div>
           {isFav()}
          </div>
          <div>
          Category - {reDetails.category.length === 0 ? 'none' : reDetails.category}
          </div>
        </div>
        <div className='mycard-title'>
          {reDetails.title}
        </div>
      </Card>
    </div>
  )
}

export default MyRecipe
