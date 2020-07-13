import React, { useState } from 'react';
import { Segment, Header, Image, Button, Divider, Form, Grid, Icon, Label } from 'semantic-ui-react';

import Conversions from './Conversions';
import Substitute from './Substitute';
import axios from 'axios';
import NutritionalData from './NutritionalData';
import Ingredients from './Ingredients';
import Steps from './Steps';
//import { set } from 'mongoose';

const MyRecipeDetails = (props) => {
  console.log('MyRecipeDetials props: ',props);
  
  const userId = localStorage.userId;
  //TODO: include diets, nutrition and wine pairing 
  const { 
    title, 
    readyInMinutes, 
    glutenFree, 
    analyzedInstructions, 
    diets,
    nutrition,
    servings, 
    image, 
    extendedIngredients, 
    sustainable, 
    weightWatcherSmartPoints, 
    lowFodmap, 
    notepad, 
    _id,
    favorite,
    category,
    recipeID
  } = props.location.state.details;
    //console.log('notepad: ', notepad);

    const [note, setNote] = useState(notepad);
    const [showNote, setShowNote] = useState('block');
    const [showForm, setShowForm] = useState('none');
    const [isFavorite, setIsFavorite] = useState(favorite);
    const [categorize, setCategorize] = useState(category);
    const [showCategoryForm, setShowCategoryForm] = useState('none');
    const [showGlutenFree, setShowGlutenFree] = useState('');

  let imageUrl = `${image}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
  const getInstructions = analyzedInstructions[0].steps;
  const instructions = getInstructions.map(step => step.step);

  const onNoteChange = (e) => {
   //console.log('e target value: ',e.target.value);
    let newNote = e.target.value;
    setNote(newNote);
  }

  //TODO: check if it works
  const updateNote = async (e) => {
    e.preventDefault();
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
      //console.log('res: ',res.data);
      setShowForm('none');
      setShowNote('block');
    } catch (err) {
      console.error("error: ",err);
    }
  }

  const showNoteEditForm = () => {
    setShowNote('none');
    setShowForm('block'); 
  }

  const hideForm = () => {
    setShowForm('none');
    setShowNote('block');
  }

  const makeFavorite = async () => {
    try {
      const configObj = {
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        }
      };

      const body = JSON.stringify({
        favorite : true
      });

      const res = await axios.put(`http://localhost:5000/api/users/${userId}/recipes/${_id}/favorite`, body, configObj);
      //console.log('res: ',res.data);
      setIsFavorite(true);
    } catch (err) {
      console.error("error: ",err);
    }
  }

  const  unFavorite = async () => {
    try {
      const configObj = {
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        }
      };

      const body = JSON.stringify({
        favorite : false
      });

      const res = await axios.put(`http://localhost:5000/api/users/${userId}/recipes/${_id}/favorite`, body, configObj);
      //console.log('res: ',res.data);
      setIsFavorite(false);
    } catch (err) {
      console.error("error: ",err);
    }
  }

  const onCategoryChange = (e) => {
    // console.log('on category change');
    // console.log('etv: ',e.target.value)
    let newCategory = e.target.value;
    setCategorize(newCategory);
  }

  const updateCategory = async () => {
    console.log('update category');
    try {
      const configObj = {
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        }
      };

      const body = JSON.stringify({
        category: categorize
      });

      const res = await axios.put(`http://localhost:5000/api/users/${userId}/recipes/${_id}/category`, body, configObj);
      console.log('res:', res.data);
      setShowCategoryForm('none');
    } catch (err) {
      console.error(err.message);
    }
  }

  const showCategoryEditForm = () => {
    setShowCategoryForm('block');
  }

  const hideCategoryForm = () => {
    setShowCategoryForm('none');
  }

  // const square = { width: 175, height: 175 }
  
  return (
    <div>
      <Segment inverted>
        <Header inverted as='h2' textAlign='center'>
          {title}
        </Header>
      </Segment>

      <Image fluid centered src={imageUrl}></Image>

      {/* <Segment color='black'>
        Make it a favorite: {isFavorite === false ? <i className="far fa-heart" onClick={() => makeFavorite()}></i> :  <i className="fas fa-heart" onClick={() => unFavorite()}></i>}
      </Segment> */}

      {isFavorite === false ? 
        <Button as='div' labelPosition='right'>
          <Button color='' onClick={() => makeFavorite()}>
            <Icon name='heart' />
          </Button>
          <Label as='a' basic color=''>
          </Label>
        </Button>
        :
        <Button as='div' labelPosition='right'>
          <Button color='red' onClick={() => unFavorite()}>
            <Icon name='heart' />
          </Button>
          <Label as='a' basic color='red'>
          </Label>
        </Button>
      }

      <Segment tertiary color='black'>
        Category: <span className='category'>{categorize === '' ? 'no category assiged' : categorize} </span>
        <Button tertiary size='mini' onClick={() => showCategoryEditForm()}>Edit</Button>
        <Form style={{'display': showCategoryForm}} onSubmit={() => updateCategory()}>
          <Form.Field>
            <input 
            placeholder='add a category...'
            value={categorize}
            name='category'
            onChange={(e) => onCategoryChange(e)}
            />
          </Form.Field>
          <Button primary type='submit'>Save</Button>
          <Button secondary onClick={() => hideCategoryForm()}>Cancel</Button>
        </Form>
      </Segment>

      <Segment inverted secondary color='grey'>
        {diets.map(type => type.toUpperCase() + ' / ')}
      </Segment>

      <Segment inverted color="olive">{servings} servings</Segment>
      <Segment inverted color="green">Ready in {readyInMinutes} minutes</Segment>
      <Segment inverted color='teal'>{glutenFree ? 'Gluten Free' : 'Not Gluten Free'}</Segment>
      <Segment inverted color='blue'>{sustainable ? 'Sustainable' : 'Not marked as sustainable'}</Segment>
      <Segment inverted color='purple'>{lowFodmap ? 'Good forLow FODMAP diet restrictions' : 'Does not support a Low FODMAP diet'}</Segment>
      <Segment inverted color="pink">WeitghtWatchers Points {weightWatcherSmartPoints}</Segment>
    
      <Ingredients ingredients={extendedIngredients} />

      <Steps instructions={instructions} />

      <div className='notepad-container'>
        <div className="notepad" style={{'display': showNote}}>
          <span className='note-heading' >Notes</span>
          {note}
        </div>
      </div> 
      <Button style={{'display': showNote}} fluid color='black' onClick={() => showNoteEditForm()}>Edit</Button>
      <Form style={{'display': showForm}} onSubmit={(e) => updateNote(e)}>
        <Form.Field>
          <textarea 
            value={note} 
            name="note" 
            onChange={(e) => onNoteChange(e)} 
            />
        </Form.Field>
        <Button primary type="submit" value="update">Save</Button>
        <Button secondary onClick={() => hideForm()}>Cancel</Button>
      </Form>

      <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <Conversions />
          </Grid.Column>
          <Grid.Column>
            <Substitute />
          </Grid.Column>
        </Grid>
        <Divider vertical>OR</Divider>
      </Segment> 

      <NutritionalData recipeId={recipeID} />
    </div>
  )
}

export default MyRecipeDetails