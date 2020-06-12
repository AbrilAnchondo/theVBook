import React from 'react';
import { Header, List, Divider } from 'semantic-ui-react';

const Steps = ({ instructions }) => {
  //console.log("instructions",instructions);
  return (
    <div  className="steps">
      <Header as='h2'>Instructions</Header>
      <List ordered>
        {instructions.map((step, index) => <List.Item key={index}>{step}<Divider /></List.Item>)}
      </List>
    </div>
  )
}

export default Steps
