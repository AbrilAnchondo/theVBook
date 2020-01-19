import React, { useState } from 'react';

const Conversions = () => {
  const [ingredientName, setIngredientName] = useState('');
  const [sourceAmount, setSourceAmount] = useState('');
  const [sourceUnit, setSourceUnit] = useState('');
  const [targetUnit, setTargetUnit] = useState('');
  const [conversion, setConversion] = useState({});
  

  const handleChange = (event) => {
    console.log(event.target.value);
  
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log("handle submit event", event);
    // const response = await fetch(`https://api.spoonacular.com/recipes/convert?ingredientName=flour&sourceAmount=2.5&sourceUnit=cups&targetUnit=grams&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`)
    // const converting = await response.json();
    // console.log("resonse converting", converting);
   


  }

  return (
    <div>
     <h3>Need a conversion?</h3> 
     <form onSubmit={handleSubmit}>
       <label>
         What
         <input type='text'
          name='name'
          value={ingredientName}
          placeholder='ingredient name...'
          onChange={handleChange}
          />
       </label>

       <label>
         How much
         <input type='text'
          name='amount'
          value={sourceAmount}
          placeholder='amount...'
          onChange={handleChange}
          />
       </label>

       <label>
         Unit to convert
         <input type='text'
          name='sourceunit'
          value={sourceUnit}
          placeholder='unit...'
          onChange={handleChange}
          />
       </label>

       <label>
         Unit to convert to
         <input type='text'
          name='targetunit'
          value={targetUnit}
          placeholder='unit...'
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