import React, { useState } from 'react';

const Conversions = () => {
  const [input, setInput] = useState('');
  

  const handleChange = (event) => {
    //console.log(event.target.value);
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit event", event);

  }

  return (
    <div>
     <form onSubmit={handleSubmit}>
       <label>
         Need a conversion?
         <input type='text'
          name='name'
          value={input}
          placeholder='name,amount,unit,to'
          onChange={handleChange}
          />
       </label>
       <input type='submit' value='Submit' />
     </form>
     <br></br>
    </div>
  )
}

export default Conversions