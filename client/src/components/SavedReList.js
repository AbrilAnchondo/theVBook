import React from 'react';
import MyRecipe from './MyRecipe';

const SavedReList = ({ fullRes }) => {
  console.log('SavedReList props: ',fullRes);
  return (
    <div>
      <p>this is the SavedReList component</p>
      {fullRes.map(re => <MyRecipe reDetails={re}/>)}
    </div>
  )
}

export default SavedReList