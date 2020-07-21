import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchByKeyWord = (props) => {

  return (
        <Input 
          onChange={props.onInputChange}
          value={props.keyword}
          placeholder='enter keyword...'
          name='keyword'
          fluid
        />
  )
}

export default SearchByKeyWord