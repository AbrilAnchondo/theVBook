import React, { Fragment } from 'react';
import { Header, List } from 'semantic-ui-react';

const Steps = ({ instructions }) => {
  //console.log("instructions",instructions);
  return (
    <Fragment>
      <Header as='h2' dividing>Follow these Steps:</Header>
      <List ordered>
        {instructions.map((step, index) => <List.Item key={index}>{step}</List.Item>)}
      </List>
    </Fragment>
  )
}

export default Steps
    // <Fragment>
    //   <Header as='h2' dividing>Steps</Header>
    //   <ul>
    //     {instructions.map((step, index) => <li key={index}>{step}</li>)}
    //   </ul>
    // </Fragment>