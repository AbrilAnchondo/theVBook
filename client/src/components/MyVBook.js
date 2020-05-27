import React, { useState, useEffect } from 'react';

//import RecipeList from './RecipeList';
import axios from 'axios';
import SavedReList from './SavedReList';
//import { set } from 'mongoose';
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
      //console.log('response: ',response);
      const userRe = response.data;
      console.log('userRe :',userRe)
      setUserRe(userRe);
      let ids = userRe.map(re => re.recipeID).join();
      //console.log('ids: ',ids);
      const res = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&includeNutrition=true&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      //console.log(res);
      const recipeList = await res.json();
      console.log('recipeList: ',recipeList);
      setRecipeList(recipeList);
    } 
    fetchUserRecipes();
 },[])

 const mergedList = (arr1,arr2) => {
  const temp = [];
  arr1.forEach(x => {
    arr2.forEach(y => {
      if(x.recipeID == y.id) {
        temp.push({ ...x, ...y})
      }
    })
  })
  console.log('temp: ',temp)
  return temp
 }
 let fullReList = mergedList(userRe,recipeList);
 console.log('fullReList: ',fullReList);

  return (
      <div>
        <h1>Your Recipes</h1>
        <SavedReList fullRes={fullReList} />
        {/* <RecipeList recipes={recipeList} /> */}
      </div>
  )
}

export default MyVBook 