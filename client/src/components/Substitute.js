import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const Substitute = ({ ingredients }) => {
  const [input, setInput] = useState('');
  const [substitutes, setSubstitutes] = useState([]);
  const [message, setMessage] = useState('');
  const [showButton, setShowButton] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value); 
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${input}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
    const subs = await response.json();
    if(subs.message === "Could not find any substitutes for that ingredient." || "Could not find any ingredient by that id.") {
      alert(subs.message);
      setInput('');
    } else {
      setSubstitutes(subs.substitutes);
      setMessage(subs.message);
      setInput('');
      setShowButton(true);
    }
  }

  const handleButtonClick = () => {
    setMessage('');
    setSubstitutes([]);
    setShowButton(false);
  }
  
  return (
    <div className="substitute">
      <h3 className='header'>Find a Substitute</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>
          <input type='text' 
          name='name' 
          value={input}
          placeholder=' type ingredient...'
          onChange={handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </Form.Field>
      </Form>
      <br></br>
      <h3>{message}</h3>
      {substitutes.map((substitute,index) => <p key={index}>{substitute}</p>)}
      {showButton ? <Button onClick={handleButtonClick}basic size='mini' color='blue'>Clear</Button> : null}
    </div>
  )
}

export default Substitute
