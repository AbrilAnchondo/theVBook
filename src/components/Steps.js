import React, { Fragment } from 'react';

const Steps = ({ instructions }) => {
  //console.log("instructions",instructions);
  return (
    <Fragment>
      <h2>Steps:</h2>
      <ul>
        {instructions.map((step, index) => <li key={index}>{step}</li>)}
      </ul>
    </Fragment>
  )
}

export default Steps