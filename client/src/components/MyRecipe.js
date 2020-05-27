import React from 'react';

const MyRecipe = ({ reDetails }) => {
  console.log('reDetails: ',reDetails);
  return (
    <div>
      {reDetails.title}
    </div>
  )
}

export default MyRecipe