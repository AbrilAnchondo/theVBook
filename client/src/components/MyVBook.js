import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedReList from './SavedReList';
import MyRecipeOptions from './MyRecipeOptions';
//import { set } from 'mongoose';
//import MyRecipeDetails from './MyRecipeDetails';

const MyVBook = () => {
  //console.log("props",props.location.state.image)
  let userId = localStorage.userId;
  const [userRe, setUserRe] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [filterTerm, setFilterTerm] = useState('All');

  
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
      //console.log('recipeList: ',recipeList);
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
  //console.log('temp: ',temp)
  return temp
 }
 
 const getFilteredRecipes = () => {
   let filtered = userRe;
   filtered = userRe.filter(re => filterTerm === 'Favorites' ? re.favorite === true : userRe);
   return filtered   
  }

  let fullReList = mergedList(getFilteredRecipes(),recipeList);
  //console.log('fullReList: ',fullReList);

 const onFilterChange = (e) => {
   setFilterTerm(e.target.value); 
  }   

  return (
      <div>
        <div>
          <h1 className='vbook-title'>My Recipe Book</h1>
        </div>
        <MyRecipeOptions 
          filterTerm={filterTerm}
          onFilterChange={onFilterChange}
        />
        <SavedReList fullReList={fullReList} />
        <div className='bg-vbook'></div>
      </div>
  )
}

export default MyVBook 