import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';

const Steps = ({ instructions }) => {
  //console.log("instructions",instructions);
  return (
    <Fragment>
      <Header as='h2' dividing>Steps</Header>
      <ul>
        {instructions.map((step, index) => <li key={index}>{step}</li>)}
      </ul>
    </Fragment>
  )
}

export default Steps