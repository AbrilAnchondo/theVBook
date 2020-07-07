import React from 'react';
import { Form, Segment } from 'semantic-ui-react';

const MyRecipeOptions = (props) => {
  console.log('myRecipeOptions props: ',props);
  return (
    <div>
      <Form>
        <label>
          Favorites:
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