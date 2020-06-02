import React, { useState, useEffect, Fragment } from 'react';
import Options from './Options';
import RecipeList from './RecipeList';
import Recipe from './Recipe';
import '../index.css';
import { Divider, Grid, Image, Segment, Placeholder } from 'semantic-ui-react';


const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('');
  const [intolerances, setIntolerances] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => { 
      const response = await fetch(`https://api.spoonacular.com/recipes/search?cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&number=20&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const data = await response.json();
      const results = data.results;
      setRecipes(results);
     
    }
    fetchRecipes();
  }, [cuisine,diet,intolerances]);

  const onCuisineChange = (e, { value }) => {
    setCuisine(value);
  }

  const onDietChange = (e, { value }) => {
    setDiet(value);
  }
  
  const onIntolerancesChange = (e, { value }) => {
    setIntolerances(value);
  }

  return (
    <Fragment>
      <Placeholder inverted fluid>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
      <Divider />
      <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <p>
              <Image src='https://react.semantic-ui.comhttps://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            
          </Grid.Column>
          <Grid.Column>
            <p>
              <Image src='https://react.semantic-ui.comhttps://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </Grid.Column>
        </Grid>

        <Divider vertical>And</Divider>
      </Segment>
      <Options className="options"
        cuisine={cuisine} 
        onCuisineChange={onCuisineChange} 
        diet={diet} 
        onDietChange={onDietChange}
        intolerances={intolerances}
        onIntolerancesChange={onIntolerancesChange}
      />
      <div>
        <RecipeList recipes={recipes} />
      </div>
    </Fragment>
  )
}

export default AllRecipes