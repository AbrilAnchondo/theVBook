import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Ingredients from './Ingredients';
import Steps from './Steps';
// import NutritionalData from './NutritionalData';
import { Image, Message, Divider, Button } from 'semantic-ui-react';
import { Link } from '@reach/router';

import '../index.css';


const RecipeDetails = (props) => {
  //console.log("Props title",props);
  const image = props.location.state.image;
  //console.log(image);
  let imageURL = `https://spoonacular.com/recipeImages/${image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
  const id = props.id;
  //console.log("recipe id ",id);
  const [steps, setSteps] = useState([]);
  const [ingredients,  setIngredients] = useState([]);

  //console.log("Steps", steps);
  //console.log("Ingredients", ingredients);

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
      //console.log('ingredient list: ',ingList);
      setIngredients(ingList);
    }

    fetchRecipeDetails();
    fetchIngredientDetails();
  },[])

  const saveRecipe = async e => {
    const userId = localStorage.userId;
    const mySavedRecipe = {
      recipeID: id,
      favorite: false,
      category: "",
      notepad: ""
    };

    try {
      const configObj = {
          headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json/'
          }
        };

        const body = JSON.stringify(mySavedRecipe);
        const res = await axios.put(`http://localhost:5000/api/users/${userId}/recipes`, body, configObj);
        console.log('response: ',res);
      }catch(err) {
      console.error(err.response.data.errors[0].msg);
      alert(err.response.data.errors[0].msg);
      console.error('error: ',err);
      //console.log(err.response.data.errors[0].msg);
    }
  }

  let completeIngList = [];
  ingredients.forEach(ing => {
    let ingObj = {};
    ingObj["name"] = ing.name;
    ingObj["amount"] = ing.amount.us.value;
    ingObj["unit"] = ing.amount.us.unit;
    ingObj["image"] = ing.image;
    completeIngList.push(ingObj);
  })
  
  let instructions = [];
  steps.forEach(step => {
    instructions.push(step.step);
  })
  console.log('instructions: ', instructions);
  return (
    <div className="bg-rdetails">
      {
        localStorage.length !== 0 ? <Message>
        <Message.Header>Look for the save button and navigate to MyVBook</Message.Header></Message>
        :
        null
      }

      <div className="img-container">
        <Image src={imageURL} centered="true" rounded="true"/>
      </div>
      {localStorage.length === 0 ? 
        <Link to='/register'>
          <Button fluid 
            color="black"
            style={{marginTop: '20px'}}
            >
            Register to start saving recipes!
          </Button>
        </Link>
        :
        <Button 
          onClick={e => saveRecipe(e)}
          color="black" 
          style={{marginTop: '20px'}} 
          fluid>Save this recipe!
        </Button>
        }

      <h3><Link to='/myvbook' state={{ image: `${imageURL}`}}>Go to MyVBook</Link></h3>

      <Ingredients ingredients={completeIngList} />
      <Divider />
      <Steps instructions={instructions} /> 
      <Link to='/recipes'>
        <div className='back-arrow'><i class="fas fa-arrow-left"> back to recipes</i>
        </div>
      </Link>    
    </div>
  )
}
export default RecipeDetails



