import React, { useState, useEffect } from 'react';
//import Ingredients from './Ingredients';
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
      //console.log("ingData ", ingData);
      const ingList = ingData.ingredients;
      //console.log("ingLIst", ingList);
      setIngredients(ingList);
    }

    fetchRecipeDetails();
    fetchIngredientDetails();
  },[])

  let completeIngList = [];
  ingredients.forEach(ing => {
    let ingObj = {};
    console.log(ing.name)
    console.log(ing.amount.us.value);
    console.log(ing.amount.us.unit);
    ingObj["name"] = ing.name;
    ingObj["quantitiy"] = ing.amount.us.value;
    ingObj["unit"] = ing.amount.us.unit;
    completeIngList.push(ingObj);
  })
  console.log("Complete Ingredient List",completeIngList);

  let instructions = [];
  steps.forEach(step => {
    instructions.push(step.step);
  })
 
  return (
    <div className="bg-rdetails">
      <h1>Recipe Details</h1>
      <p>Ingredients component will render here...</p>
      <Steps instructions={instructions} />   
    </div>
  )
}
export default RecipeDetails

