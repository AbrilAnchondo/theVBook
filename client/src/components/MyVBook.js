import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedReList from './SavedReList';
import MyRecipeOptions from './MyRecipeOptions';
import CategoryOptions from './CategoryOptions';

//TODO:: check how to pass recipe details
const MyVBook = () => {
  let userId = localStorage.userId;
  const [userRe, setUserRe] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [filterTerm, setFilterTerm] = useState('All');
  const [categoryTerm, setCategoryTerm] = useState('All');

  
  useEffect (() => {
    const fetchUserRecipes = async () => {
    
      const configObj = {
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        }
      };

      const response = await axios.get(`http://localhost:5000/api/users/${userId}`, configObj);
      const userRe = response.data;
      setUserRe(userRe);

      let ids = userRe.map(re => re.recipeID).join();

      const res = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&includeNutrition=true&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const recipeList = await res.json();
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
  return temp
 }
 
 const getFilteredRecipes = () => {
   console.log('filterTerm', filterTerm);
   console.log('categoryTerm', categoryTerm);
   return userRe
    //.filter(re => filterTerm === 'All' ? true : re.favorite)
    //for each recipe return true if the filterTerm is equal to All or re.favorite is equal to true
    .filter(re => (filterTerm === 'All' || re.favorite)) 
    //.filter(re => categoryTerm === 'All' ? true : re.category === categoryTerm);
    .filter(re => (categoryTerm === 'All' || re.category === categoryTerm))

    //.filter(re => (filter1) && (filter2))
    //.filter(re => (filterTerm === 'All' || re.favorite) && (categoryTerm === 'All' || re.category === categoryTerm))
  }

  console.log('getFilteredRecipes()', getFilteredRecipes());
  let fullReList = mergedList(getFilteredRecipes(),recipeList);

 const onFilterChange = (e) => {
   setFilterTerm(e.target.value); 
  }   

  const categories = userRe.map(re => re.category);
  
  const onCategoryChange = (e) => {
      setCategoryTerm(e.target.value);
  }

  return (
      <div className='vbook-container'>
        <div>
          <h1 className='vbook-title'>My VBook</h1>
        </div>
       
        <div className='vbook-filters'>
          <div>
            <MyRecipeOptions 
              filterTerm={filterTerm}
              onFilterChange={onFilterChange}
            />
          </div>
          <div>
            <CategoryOptions categories={categories} 
              categoryTerm={categoryTerm}
              onCategoryChange={onCategoryChange}
            />
          </div>
        </div>

        <SavedReList fullReList={fullReList}/>
      </div>
  )
}

export default MyVBook 