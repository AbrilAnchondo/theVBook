import React, { Fragment } from 'react';
import { Header, List } from 'semantic-ui-react';

const Steps = ({ instructions }) => {
  //console.log("instructions",instructions);
  return (
    <div  className="steps">
      <Header as='h2' dividing>Follow these Steps:</Header>
      <List ordered>
        {instructions.map((step, index) => <List.Item key={index}>{step}</List.Item>)}
      </List>
    </div>
  )
}

export default Steps
