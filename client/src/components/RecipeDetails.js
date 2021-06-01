import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Ingredients from './Ingredients';
import Steps from './Steps';
import { Image, Button } from 'semantic-ui-react';
import { Link } from '@reach/router';

import '../index.css';


const RecipeDetails = (props) => {
  console.log('props', props);
  const title = props.location.state.title;
  const image = props.location.state.image;
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
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&defaultCss=true`);
      const ingData = await response.json();
      const ingList = ingData.ingredients;
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
      }catch(err) {
      alert(err.response.data.errors[0].msg);
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
  return (
    <div className="bg-details myrecipe-details">
      <h1 className='header'>
        {title}
      </h1>
      <div className="recipe-img">
        <Image src={imageURL} centered fluid style={{objectFit: 'cover'}}/>
      </div>

      <div className='detail'>
        { 
          localStorage.length === 0 ? 
          <Link to='/register'>
            <Button fluid 
              color="black"
              style={{marginTop: '20px'}}
              >
              Register to save recipes!
            </Button>
          </Link>
          :
          <Button 
            onClick={e => saveRecipe(e)}
            color="black" 
            style={{marginTop: '20px'}} 
          >Save this recipe!
          </Button>
          }
      </div>

      <h3 className='detail'>
        <Link to='/myvbook' state={{ image: imageURL }}>
          Go to MyVBook
        </Link>
      </h3>

      <div className='detail'>
        <Ingredients ingredients={completeIngList} />
      </div>

      <div className='detail'>
        <Steps instructions={instructions} /> 
      </div>

      <div className='detail'>
        <Link to='/recipes'>
          <div className='back-arrow'><i class="fas fa-arrow-left"> back to recipes</i>
          </div>
        </Link>    
      </div>
    </div>
  )
}
export default RecipeDetails



