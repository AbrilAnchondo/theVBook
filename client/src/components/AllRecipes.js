import React, { useState, useEffect, Fragment } from 'react';
import SearchByKeyWord from './SearchByKeyWord';
import Options from './Options';
import RecipeList from './RecipeList';
import '../index.css';
import { Divider, Segment, Button } from 'semantic-ui-react';


const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('Vegan');
  const [intolerances, setIntolerances] = useState('');
  const [keyword, setKeyWord] = useState('');
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);


  useEffect(() => {
    const fetchRecipes = async () => { 
      const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${keyword}&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&number=${limit}&offset=${skip}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const data = await response.json();
      const results = data.results;
      console.log('recipes from api: ',results);
      setRecipes([...recipes, ...results]);
    }
    fetchRecipes();
  }, [cuisine,diet,intolerances,keyword,skip]);

  const onCuisineChange = (e, { value }) => {
    setCuisine(value);
  }

  const onDietChange = (e, { value }) => {
    setDiet(value);
  }
  
  const onIntolerancesChange = (e, { value }) => {
    setIntolerances(value);
  }

  const onInputChange = (e) => {
    let word = e.target.value;
    console.log(word);
    setKeyWord(word);
  }

  const loadMore = (e) => {
    console.log('load more clicked');
    setSkip(skip + limit);
  }

  return (
    <Fragment>
      <Segment>
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
      </Segment>
     
      <div>
        <RecipeList recipes={recipes} />
      </div>
      <Button fluid color='grey'
        onClick={loadMore}>
          <span className='header'>Load More</span>
      </Button>
    </Fragment>
  )
}

export default AllRecipes