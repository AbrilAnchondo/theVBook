import React, { useState } from 'react';


const Substitute = ({ ingredients }) => {
  const [input, setInput] = useState('');
  const [substitutes, setSubstitutes] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    //console.log(event.target.value);
    setInput(event.target.value); 
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${input}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
    const subs = await response.json();
    setSubstitutes(subs.substitutes);
    setMessage(subs.message);
    setInput('');
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Need a substitute? 
          <input type='text' 
            name='name' 
            value={input}
            placeholder=' type ingredient...'
            onChange={handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <br></br>
      <h3>{message}</h3>
      {substitutes.map((substitute,index) => <p key={index}>{substitute}</p>)}
    </div>
  )
}

export default Substitute