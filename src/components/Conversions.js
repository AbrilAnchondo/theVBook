import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

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
    console.log("conv",conv)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log("handle submit event", event);
    const response = await fetch(`https://api.spoonacular.com/recipes/convert?ingredientName=${conversion.ing}&sourceAmount=${conversion.sourceAmount}&sourceUnit=${conversion.sourceUnit}&targetUnit=${conversion.targetUnit}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`)
    const result = await response.json();
    const answer = result.answer
    setAnswer(answer);
    setShowButton(true);
  }

  const handleButtonClick = () => {
    setAnswer('');
    setShowButton(false);
  }

  return (
    <div>
     <br></br>
     <p>Need a conversion?</p> 
     <form onSubmit={handleSubmit}>
       <label>
         What
         <input type='text'
          name='ing'
          value={conversion.ing}
          placeholder='ingredient name...'
          onChange={handleChange}
          />
       </label>

       <label>
         How much
         <input type='text'
          name='sourceAmount'
          value={conversion.sourceAmount}
          placeholder='amount...'
          onChange={handleChange}
          />
       </label>

       <label>
         Unit to convert
         <input type='text'
          name='sourceUnit'
          value={conversion.sourceUnit}
          placeholder='unit...'
          onChange={handleChange}
          />
       </label>

       <label>
         Unit to convert to
         <input type='text'
          name='targetUnit'
          value={conversion.targetUnit}
          placeholder='unit...'
          onChange={handleChange}
          />
       </label>
  
       <input type='submit' value='Submit' />
     </form>
     <br></br>
     {answer}
     <br></br>
     {showButton ? <Button onClick={handleButtonClick} basic size='mini' color='grey'>Clear</Button> : null}
    </div>
  )
}

export default Conversions