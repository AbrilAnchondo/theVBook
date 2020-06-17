import React from 'react';

import { Dropdown, Segment } from 'semantic-ui-react';

const myOptions = [
  {key: 'all', value: 'All', text: 'All'},
  {key: 'fav', value: 'Favorites', text: 'Favorites'}
];

const MyRecipeOptions = () => {
  return (
      <Segment>
        <Dropdown 
          options={myOptions}
          placeholder='Filter'
        />
      </Segment>
  )
}

export default MyRecipeOptions