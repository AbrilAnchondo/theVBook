import React, { useState, useEffect, Fragment } from 'react';
import SearchByKeyWord from './SearchByKeyWord';
import Options from './Options';
import RecipeList from './RecipeList';
import '../index.css';
import { Divider, Placeholder, Card, Button } from 'semantic-ui-react';


const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('');
  const [intolerances, setIntolerances] = useState('');
  const [keyword, setKeyWord] = useState('');
  const [limit, setLimit] = useState(5);
  const [showRecipes, setShowRecipes] = useState('hidden');
  const [showPlaceholder, setShowPlaceholder] = useState('');


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
    setShowPlaceholder('none');
  }

  const onDietChange = (e, { value }) => {
    setDiet(value);
    setShowRecipes('');
    setShowPlaceholder('none');
  }
  
  const onIntolerancesChange = (e, { value }) => {
    setIntolerances(value);
    setShowRecipes('');
    setShowPlaceholder('none');
  }

  const onInputChange = (e) => {
    let word = e.target.value;
    setKeyWord(word);
    setShowRecipes('');
    setShowPlaceholder('none');
  }

  const loadMore = (e) => {
    setLimit(limit + 5);
  }

  const clearFilters = () => {
    setShowRecipes('hidden');
    setRecipes([]);
    setCuisine('');
    setDiet('');
    setIntolerances('');
    setKeyWord('');
    setShowPlaceholder('');
  }

  return (
    <Fragment>
      <h1 className='vbook-title'>What do you feel like eating?</h1>
      <div className='recipe-search'>
        <SearchByKeyWord onInputChange={onInputChange} keyword={keyword}/>
        <Divider horizontal />
        <Options className='options'
          cuisine={cuisine} 
          onCuisineChange={onCuisineChange} 
          diet={diet} 
          onDietChange={onDietChange}
          intolerances={intolerances}
          onIntolerancesChange={onIntolerancesChange}
        />
        <Divider horizontal></Divider>
      </div>

      <Card.Group itemsPerRow={3} style={{margin: '15px', display: showPlaceholder, maxHeight: '100vh'}}>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
      </Card.Group>

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