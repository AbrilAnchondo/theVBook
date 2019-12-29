import React, { useState, useEffect } from 'react';
import Ingredients from './Ingredients';
import Steps from './Steps';


const RecipeDetails = (props) => {
  const id = props.id;
  const [steps, setSteps] = useState([]);
  const [ingredients,  setIngredients] = useState([]);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const data = await response.json();
      const steps = data[0].steps;
      setSteps(steps);
    }

    const fetchIngredientDetails = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const ingData = await response.json();
      const ingList = ingData.ingredients;
      setIngredients(ingList);
    }

    fetchRecipeDetails();
    fetchIngredientDetails();
  },[])

  let completeIngList = [];
  ingredients.forEach(ing => {
    let ingObj = {};
    ingObj["name"] = ing.name;
    ingObj["quantity"] = ing.amount.us.value;
    ingObj["unit"] = ing.amount.us.unit;
    completeIngList.push(ingObj);
  })

  let instructions = [];
  steps.forEach(step => {
    instructions.push(step.step);
  })
 
  return (
    <div className="bg-rdetails">
      <h1>Recipe Details</h1>
      <p>Ingredients component will render here...</p>
      <Ingredients ingredients={completeIngList} />
      <Steps instructions={instructions} />   
    </div>
  )
}
export default RecipeDetails

