import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const Conversions = () =>   {
  const [conversion, setConversion] = useState({
    ing: "",
    sourceAmount: "",
    sourceUnit: "",
    targetUnit: ""
    });
  const [answer, setAnswer] = useState('');
  const [showButton, setShowButton] = useState(false);

  const handleChange = (event) => {
    let conv = {...conversion};
    conv[event.target.name] = event.target.value;
    setConversion(conv);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.spoonacular.com/recipes/convert?ingredientName=${conversion.ing}&sourceAmount=${conversion.sourceAmount}&sourceUnit=${conversion.sourceUnit}&targetUnit=${conversion.targetUnit}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`)
    const result = await response.json();
    const answer = result.answer
    setAnswer(answer);
    setShowButton(true);
    setConversion({
      ing: "",
      sourceAmount: "",
      sourceUnit: "",
      targetUnit: ""
    });
  }

  const handleButtonClick = () => {
    setAnswer('');
    setShowButton(false);
  }

  return (
    <div className="conversion">
      <h3 className='header'>Get a Conversion</h3>
     <Form onSubmit={handleSubmit}>
       <Form.Field>
       <label><h4>What?</h4>
        <input type='text' 
          name='ing'
          value={conversion.ing}
          placeholder='ingredient name...'
          onChange={handleChange}
        />
       </label>  
       </Form.Field>

       <Form.Field>
       <label><h4>How Much?</h4>
        <input type='text' 
          name='sourceAmount'
          value={conversion.sourceAmount}
          placeholder='amount'
          onChange={handleChange}
        />
       </label> 
       </Form.Field>

       <Form.Field>
       <label><h4>Unit to convert</h4>
        <input type='text' 
          name='sourceUnit'
          value={conversion.sourceUnit}
          placeholder='unit...'
          onChange={handleChange}
        />
       </label>
       </Form.Field>

       <Form.Field>
       <label><h4>Unit to convert to</h4>
        <input type='text' 
          name='targetUnit'
          value={conversion.targetUnit}
          placeholder='unit...'
          onChange={handleChange}
        />
       </label>
       <input type='submit' value='Submit' />  
       </Form.Field>
     </Form>

     <br></br>
     {answer}
     <br></br>
     {showButton ? <Button onClick={handleButtonClick} basic size='mini' color='grey'>Clear</Button> : null}
    </div>
  )
}

export default Conversions
