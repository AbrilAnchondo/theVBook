import React from 'react';

const MyRecipeOptions = (props) => {
  console.log('myRecipeOptions props: ',props);
  return (
    <div>
      <form>
        <label>
          Favorites:
        <select value={props.filterTerm} 
          onChange={props.onFilterChange}
        >
          <option value='All'>All</option>
          <option value='Favorites'>Favorites</option>
        </select>
        </label>
      </form>
    </div>
  )
}

export default MyRecipeOptions