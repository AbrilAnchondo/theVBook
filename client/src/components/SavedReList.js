import React from 'react';

import MyRecipe from './MyRecipe';

const SavedReList = ({ fullReList }) => {

  return (
    <div className='myrecipe-list'>
      {fullReList.map(re => <MyRecipe key={re.id} reDetails={re} id={fullReList.indexOf(re)}/>)}
    </div>
  )
}

export default SavedReList