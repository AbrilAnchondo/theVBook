import React, { useState, useEffect, Fragment } from 'react';
import SearchByKeyWord from './SearchByKeyWord';
import Options from './Options';
import RecipeList from './RecipeList';
import '../index.css';
import { Divider, Segment, Button } from 'semantic-ui-react';


const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('');
  const [intolerances, setIntolerances] = useState('');
  const [keyword, setKeyWord] = useState('');
  const [limit, setLimit] = useState(5);
  // const [skip, setSkip] = useState(0);
  const [showRecipes, setShowRecipes] = useState('hidden');


  useEffect(() => {
    const fetchRecipes = async () => { 
      const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${keyword}&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&number=${limit}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const data = await response.json();
      const results = data.results;
      setRecipes(results);
    }
    fetchRecipes();
  }, [cuisine,diet,intolerances,keyword,limit]);

  const onCuisineChange = (e, { value }) => {
    setCuisine(value);
    setShowRecipes('');
  }

  const onDietChange = (e, { value }) => {
    setDiet(value);
    setShowRecipes('');
  }
  
  const onIntolerancesChange = (e, { value }) => {
    setIntolerances(value);
    setShowRecipes('');
  }

  const onInputChange = (e) => {
    let word = e.target.value;
    setKeyWord(word);
    setShowRecipes('');
  }

  const loadMore = (e) => {
    // setSkip(skip + limit);
    setLimit(limit + 5);
  }

  const clearFilters = () => {
    setShowRecipes('hidden');
    setRecipes([]);
    setCuisine('');
    setDiet('');
    setIntolerances('');
    setKeyWord('');
  }

  return (
    <Fragment>
      <h1 className='vbook-title'>What do you feel like eating?</h1>
      <div className='recipe-search'>
        <SearchByKeyWord onInputChange={onInputChange} keyword={keyword}/>
        <Divider horizontal />
        <Options className="options"
          cuisine={cuisine} 
          onCuisineChange={onCuisineChange} 
          diet={diet} 
          onDietChange={onDietChange}
          intolerances={intolerances}
          onIntolerancesChange={onIntolerancesChange}
        />
        <Divider horizontal></Divider>
      </div>
      <div style={{'visibility': showRecipes}}>
        <Button fluid color='grey' onClick={clearFilters}>Clear</Button>
        <div>
          <RecipeList className='recipe-list' recipes={recipes} />
        </div>
        <Button fluid color='grey'
          onClick={loadMore}>
          <span className='header'>Load More</span>
        </Button>
      </div>
    </Fragment>
  )
}

export default AllRecipes