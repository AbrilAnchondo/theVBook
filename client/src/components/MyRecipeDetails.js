import React, { useState } from 'react';
import { Segment, Image, Button, Divider, Form, Grid, Icon, Label, Container } from 'semantic-ui-react';

import Conversions from './Conversions';
import Substitute from './Substitute';
import axios from 'axios';
import NutritionalData from './NutritionalData';
import Ingredients from './Ingredients';
import Steps from './Steps';

const MyRecipeDetails = (props) => {
  
  const userId = localStorage.userId;
  //TODO: include diets, nutrition and wine pairing 
  const { 
    title, 
    readyInMinutes, 
    glutenFree, 
    analyzedInstructions, 
    diets,
    // nutrition,
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
    let newNote = e.target.value;
    setNote(newNote);
  }

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
    <div className='bg-mydetails'>
      <h1 className='header'>
          {title}
      </h1>
      
      <Image rounded fluid centered src={imageUrl} style={{'marginBottom': '5px'}}></Image>

      {
        isFavorite === false ? 
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

      <div className='myrecipe-details'>
        <div>
          {diets.map(type => type.toUpperCase() + ' / ')}
        </div>
        <div>{servings} servings</div>
        <div>Ready in {readyInMinutes} minutes</div>
        <div>{glutenFree ? 'Gluten Free' : 'Not Gluten Free'}</div>
        <div>{sustainable ? 'Sustainable' : 'Not marked as sustainable'}</div>
        <div>{lowFodmap ? 'OK for Low FODMAP' : 'Not for Low FODMAP diet'}</div>
        <div>WeitghtWatchers Points {weightWatcherSmartPoints}</div>
      </div>
    
      <div className='myrecipe-category'>
        Category: <span className='category'>{categorize === '' ? 'no category assiged' : categorize} </span>
        <br></br>
        <Button color='grey' size='mini' onClick={() => showCategoryEditForm()}>Edit</Button>
        <br></br>
        <Form style={{'display': showCategoryForm}} onSubmit={() => updateCategory()}>
          <Form.Field>
            <input 
            placeholder='add a category...'
            value={categorize}
            name='category'
            onChange={(e) => onCategoryChange(e)}
            />
          </Form.Field>
          <Button size='mini' primary type='submit'>Save</Button>
          <Button size='mini' secondary onClick={() => hideCategoryForm()}>Cancel</Button>
        </Form>
      </div>

      <Ingredients ingredients={extendedIngredients} />

      <Steps instructions={instructions} />

      <h2 className='header'>Notepad</h2>
      <div className='notepad-container'>
        <div className="notepad" style={{'display': showNote}}>
          {note}
        </div>
      </div> 
      <Button style={{'display': showNote}} fluid onClick={() => showNoteEditForm()}>Edit</Button>
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

      <Segment className='conv-subs-container'>
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