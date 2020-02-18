import React, { useState, useEffect } from 'react';
import Ingredients from './Ingredients';
import Steps from './Steps';
import NutritionalData from './NutritionalData';
import Substitute from './Substitute';
import Conversions from './Conversions';
import { Image } from 'semantic-ui-react';

import '../index.css';

const RecipeDetails = (props) => {
  //console.log(props);
  const image = props.location.state.image;
  //console.log(image);
  let imageURL = `https://spoonacular.com/recipeImages/${image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
  const id = props.id;
  console.log("recipe id ",id);
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
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&defaultCss=true`);
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
    ingObj["image"] = ing.image;
    completeIngList.push(ingObj);
  })

  let substituteList = [];
  ingredients.forEach(ing => {
    substituteList.push(ing.name)
  })
  
  let instructions = [];
  steps.forEach(step => {
    instructions.push(step.step);
  })
 
  return (
    <div className="bg-rdetails">
      <Image src={imageURL} fluid/>
      <Ingredients ingredients={completeIngList} />
      <Substitute ingredients={substituteList}/>
      <Conversions />
      <Steps instructions={instructions} />   
      <NutritionalData recipeId={id} />
    </div>
  )
}
export default RecipeDetails


