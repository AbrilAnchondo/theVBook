import React, { useState, useEffect } from 'react';
import Ingredients from './Ingredients';
import Steps from './Steps';
import NutritionalData from './NutritionalData';
import { Image } from 'semantic-ui-react'


const RecipeDetails = (props) => {
  //console.log(props);
  const image = props.location.state.image;
  //console.log(image);
  let imageURL = `https://spoonacular.com/recipeImages/${image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
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

    // const fetchNutritionalInfo = async () => {
    //   const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
    //   const nutriData = await response.json();
    //   //console.log(nutriData);
    //   setNutritionalData(nutriData);


    //}

    fetchRecipeDetails();
    fetchIngredientDetails();
    //fetchNutritionalInfo();
  },[])

  //console.log("state nutritional data", nutritionalData);

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
      <Image src={imageURL} fluid/>
      <Ingredients ingredients={completeIngList} />
      <Steps instructions={instructions} />   
      <NutritionalData recipeId={id} />
    </div>
  )
}
export default RecipeDetails



