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
      console.log("ingData ", ingData);
      setIngredients(ingData);
    }

    fetchRecipeDetails();
    fetchIngredientDetails();
  },[])

  // let ingredients = [];
  // steps.forEach(step => {
  //   step.ingredients.forEach(ingredient => {
  //     ingredients.push(ingredient);
  //   })
  // })

  let instructions = [];
  steps.forEach(step => {
    instructions.push(step.step);
  })
 
  return (
    <div className="bg-rdetails">
      <h1>Recipe Details</h1>
      <Ingredients ingredients={ingredients} />
      <Steps instructions={instructions} />   
    </div>
  )
}
export default RecipeDetails

