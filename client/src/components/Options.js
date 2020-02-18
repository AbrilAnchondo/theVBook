import React from 'react';

import { Dropdown, Grid } from 'semantic-ui-react';

const cuisineOptions = [
  { key: 'af', value: 'African', text: 'African'},
  { key: 'am', value: 'American', text: 'American'},
  { key: 'br', value: 'British', text: 'British'},
  { key: 'caj', value: 'Cajun', text: 'Cajun'},
  { key: 'car', value: 'Caribbean', text: 'Caribbean'},
  { key: 'ch', value: 'Chinese', text: 'Chinese'},
  { key: 'ee', value: 'Eastern European', text: 'Eastern European'},
  { key: 'eu', value: 'European', text: 'European'},  
  { key: 'fr', value: 'French', text: 'French'},
  { key: 'ge', value: 'German', text: 'German'},
  { key: 'gr', value: 'Greek', text: 'Greek'},  
  { key: 'in', value: 'Indian', text: 'Indian'},  
  { key: 'ir', value: 'Irish', text: 'Irish'},  
  { key: 'it', value: 'Italian', text: 'Italian'},  
  { key: 'ja', value: 'Japanese', text: 'Japanese'},
  { key: 'je', value: 'Jewish', text: 'Jewish'},  
  { key: 'ko', value: 'Korean', text: 'Korean'},  
  { key: 'la', value: 'Latin American', text: 'Latin American'},
  { key: 'me', value: 'Mediterranean', text: 'Mediterranean'},  
  { key: 'mex', value: 'Mexican', text: 'Mexican'},  
  { key: 'med', value: 'Middle Eastern', text: 'Middle Eastern'},
  { key: 'no', value: 'Nordic', text: 'Nordic'},  
  { key: 'so', value: 'Southern', text: 'Southern'},  
  { key: 'sp', value: 'Spanish', text: 'Spanish'},  
  { key: 'th', value: 'Thai', text: 'Thai'},  
  { key: 'vi', value: 'Vietnamese', text: 'Vietnamese'}              
];

const dietOptions = [
  { key: 'vgn', value: 'Vegan', text: 'Vegan'},
  { key: 'veg', value: 'Vegetarian', text: 'Vegetarian'},
  { key: 'lveg', value: 'Lacto-Vegetarian', text: 'Lacto-Vegetarian'},
  { key: 'oveg', value: 'Ovo-vegetarian', text: 'Ovo-Vegetarian'},
];

const intolerancesOptions = [
  { key: 'da', value: 'Dairy', text: 'Diary'},
  { key: 'eg', value: 'Egg', text: 'Egg'},
  { key: 'gl', value: 'Gluten', text: 'Gluten'},
  { key: 'gr', value: 'Grain', text: 'Grain'},
  { key: 'pe', value: 'Peanut', text: 'Peanut'},
  { key: 'se', value: 'Sesame', text: 'Sesame'},
  { key: 'so', value: 'Soy', text: 'Soy'},
  { key: 'su', value: 'Sulfite', text: 'Sulfite'},
  { key: 'tn', value: 'Tree Nut', text: 'Tree Nut'},
  { key: 'wh', value: 'Wheat', text: 'Wheat'}
];

const Options = (props) => {

  return (
    <Grid columns={3}>
      <Grid.Column>
        <Dropdown
          onChange={props.onCuisineChange}
          options={cuisineOptions}
          placeholder='Select Cuisine'
          value={props.cuisine}
        />
      </Grid.Column>
      <Grid.Column>
        <Dropdown
          onChange={props.onDietChange}
          options={dietOptions}
          placeholder='Select Diet'
          value={props.diet}
        />
      </Grid.Column>
      <Grid.Column>
        <Dropdown
          onChange={props.onIntolerancesChange}
          options={intolerancesOptions}
          placeholder='Select Intolerance'
          value={props.intolerances}
        />
      </Grid.Column>
    </Grid>

    )
  }
  
  export default Options

