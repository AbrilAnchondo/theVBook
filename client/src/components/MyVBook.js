import React, { useState, useEffect } from 'react';

import RecipeList from './RecipeList';
import axios from 'axios';
//import { Divider, Image } from 'semantic-ui-react';

const MyVBook = (props) => {
  //console.log("props",props.location.state.image)
  //const src = props.location.state.image;
  let userId = localStorage.userId;
  const [userRe, setUserRe] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  
  useEffect (() => {
    const fetchUserRecipes = async () => {
    
      const configObj = {
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        }
      };
      const response = await axios.get(`http://localhost:5000/api/users/${userId}`, configObj);
      console.log('response: ',response);
      const userRe = response.data;
      console.log('userRe :',userRe)
      setUserRe(userRe);
      let ids = userRe.map(re => re.recipeID).join();
      console.log('ids: ',ids);
      const res = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&includeNutrition=false&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      console.log(res);
      const recipeList = await res.json();
      //console.log(recipeList);
      setRecipeList(recipeList);
    } 
    fetchUserRecipes();
 },[])

  return (
      <div>
        <h1>User's saved recipes</h1>
          <RecipeList recipes={recipeList} />
      </div>
  )
}

export default MyVBook 