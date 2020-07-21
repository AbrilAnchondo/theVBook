import React, { useState } from 'react';
import MyRecipe from './MyRecipe';

const SavedReList = ({ fullReList }) => {
  console.log('SavedReList props: ',fullReList);
  const [index, setIndex] = useState(0);
  

  const toPreviousRecipe = () => {
    setIndex(index-1);
    if(index === 0) {
      setIndex(fullReList.length-1);
    }

  }

  const toNextRecipe = () => {
    setIndex(index+1);
    if(index === fullReList.length-1) {
      setIndex(0);
    }
  }

  return (
    <div className='bg-mylist'>
      <div className='arrows'>
        <span>
          <i className="fas fa-arrow-circle-left fa-3x"
            onClick={() => toPreviousRecipe()}
          ></i>
        </span>
        <span>
          <i className="fas fa-arrow-circle-right fa-3x"
            onClick={() => toNextRecipe()}
          ></i>
        </span>
      </div>
      <div className='col'>
        <div className={`card-slider active-slide-${index}`}>
          <div className='card-slider-wrapper'
            style={{'transform': `translateX(-${index*(100/fullReList.length)}%)`}}
          >
            {fullReList.map(re => <MyRecipe key={re.id} reDetails={re} id={fullReList.indexOf(re)}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedReList