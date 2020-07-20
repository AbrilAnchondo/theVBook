import React from 'react';
import { List, Divider } from 'semantic-ui-react';

const Steps = ({ instructions }) => {
  //console.log("instructions",instructions);
  return (
    <div  className='steps'>
      <h2 className='h2-header'>Instructions</h2>
      <List ordered>
        {instructions.map((step, index) => <List.Item key={index}>{step}<Divider /></List.Item>)}
      </List>
    </div>
  )
}

export default Steps
