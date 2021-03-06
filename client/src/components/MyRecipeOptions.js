import React from 'react';
import { Form } from 'semantic-ui-react';

const MyRecipeOptions = (props) => {
  return (
    <div>
      <Form>
        <label className='h2-header'>
          Select Favorites:
        <select value={props.filterTerm} 
          onChange={props.onFilterChange}
        >
          <option value='All'>All</option>
          <option value='Favorites'>Favorites</option>
        </select>
        </label>
      </Form>
    </div>
  )
}

export default MyRecipeOptions