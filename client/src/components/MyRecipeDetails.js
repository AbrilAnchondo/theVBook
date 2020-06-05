import React, { useState } from 'react';
import { Segment, List, Image } from 'semantic-ui-react';

import Conversions from './Conversions';
import Substitute from './Substitute';
import axios from 'axios';

const MyRecipeDetails = (props) => {
  console.log('MyRecipeDetials props: ',props);
  const userId = localStorage.userId;
  //TODO: include diets, nutrition and wine pairing 
  const { 
    title, 
    readyInMinutes, 
    glutenFree, 
    analyzedInstructions, 
    servings, 
    image, 
    extendedIngredients, 
    sustainable, 
    weightWatcherSmartPoints, 
    lowFodmap, 
    notepad, 
    _id} = props.location.state.details;
  //console.log('notepad: ', notepad);
  const [note, setNote] = useState(notepad);

  let imageUrl = `${image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
  let instructions = analyzedInstructions[0].steps;
  const ingredients = extendedIngredients.map(ing => ing.originalString);
  //console.log('ingredients: ',ingredients);

  const onChange = (e) => {
   //console.log('e target value: ',e.target.value);
    let newNote = e.target.value;
    setNote(newNote);
  }

  //TODO: check if it works
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("note: ",note);
    console.log('userId: ',userId);
    console.log('recipe id: ', _id);
    try {
      const configObj = {
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        }
      };

      const body = JSON.stringify({
        notepad : note
      });
      const res = await axios.put(`http://localhost:5000/api/users/${userId}/recipes/${_id}/notepad`, body, configObj);
      console.log('res: ',res.data);
    } catch (err) {
      console.error("error: ",err);
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <Image fluid centered src={imageUrl}></Image>
      <Segment  color="olive">{servings} servings</Segment>
      <Segment color="green">Ready in: {readyInMinutes} minutes</Segment>
      <Segment  color="teal">Is gluten free: {glutenFree}</Segment>
      <Segment  color="blue">Sustainable: {sustainable}</Segment>
      <Segment  color="violet">Good for low fod map diet restrictions: {lowFodmap}</Segment>
      <Segment color="pink">WeitghtWatchers Points: {weightWatcherSmartPoints}</Segment>

      <h2>Ingredients: </h2>
      <List celled size='big'>
        {ingredients.map(ing => <List.Item><List.Content>{ing}</List.Content></List.Item>)}
      </List>
      
      <h2>Instructions: </h2>
      <List divided size="large">
        {instructions.map(step => <List.Item key={step.number}><List.Content>{step.number} - {step.step}</List.Content></List.Item>)}
      </List>  

      <div className="notepad">Notes: {note}</div>
      <form className="notepad-form" onSubmit={(e) => onSubmit(e)}>
        <label>
          <textarea 
            value={note} 
            name="note" 
            onChange={(e) => onChange(e)} 
            />
        </label>
        <input type="submit" value="update" />
      </form>
      <h3>Get a Conversion: </h3>
      <Conversions />
      <h3>Get a Substitue: </h3>
      <Substitute />
    </div>
  )
}

export default MyRecipeDetails