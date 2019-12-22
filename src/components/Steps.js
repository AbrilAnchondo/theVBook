import React, { Fragment } from 'react';

const Steps = ({ instructions }) => {
  return (
    <Fragment>
      <h2>Steps:</h2>
      <ul>
        {instructions.map(step => <li>{step}</li>)}
      </ul>
    </Fragment>
  )
}

export default Steps