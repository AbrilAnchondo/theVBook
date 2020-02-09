import React, { Fragment, useState } from 'react';

import { Dropdown, Grid } from 'semantic-ui-react';

// const cuisineOptions = [
//   { key: 'af', value: 'af', text: 'African'},
//   { key: 'am', value: 'am', text: 'American'},
//   { key: 'br', value: 'br', text: 'British'},
//   { key: 'caj', value: 'caj', text: 'Cajun'},
//   { key: 'car', value: 'car', text: 'Caribbean'},
//   { key: 'ch', value: 'ch', text: 'Chinese'},
//   { key: 'ee', value: 'ee', text: 'Easter European'},
//   { key: 'eu', value: 'eu', text: 'European'},  
//   { key: 'fr', value: 'fr', text: 'French'},
//   { key: 'ge', value: 'ge', text: 'German'},
//   { key: 'gr', value: 'gr', text: 'Greek'},  
//   { key: 'in', value: 'in', text: 'Indian'},  
//   { key: 'ir', value: 'ir', text: 'Irish'},  
//   { key: 'it', value: 'it', text: 'Italian'},  
//   { key: 'ja', value: 'ja', text: 'Japanese'},
//   { key: 'je', value: 'je', text: 'Jewish'},  
//   { key: 'ko', value: 'ko', text: 'Korean'},  
//   { key: 'la', value: 'la', text: 'Latin American'},
//   { key: 'me', value: 'me', text: 'Mediterranean'},  
//   { key: 'mex', value: 'mex', text: 'Mexican'},  
//   { key: 'med', value: 'med', text: 'Middle Eastern'},
//   { key: 'no', value: 'no', text: 'Nordic'},  
//   { key: 'so', value: 'so', text: 'Southern'},  
//   { key: 'sp', value: 'sp', text: 'Spanish'},  
//   { key: 'th', value: 'th', text: 'Thai'},  
//   { key: 'vi', value: 'vi', text: 'Vietnamese'}              
// ];

// const dietOptions = [
//   { key: 'vgn', value: 'vgn', text: 'Vegan'},
//   { key: 'veg', value: 'veg', text: 'Vegetarian'},
//   { key: 'lveg', value: 'lveg', text: 'Lacto Vegetarian'},
//   { key: 'oveg', value: 'oveg', text: 'Ovo-Vegetarian'},
// ];

// const intoleranceOptions = [
//   { key: 'da', value: 'da', text: 'Diary'},
//   { key: 'eg', value: 'eg', text: 'Egg'},
//   { key: 'gl', value: 'gl', text: 'Gluten'},
//   { key: 'gr', value: 'gr', text: 'Grain'},
//   { key: 'pe', value: 'pe', text: 'Peanut'},
//   { key: 'se', value: 'se', text: 'Sesame'},
//   { key: 'so', value: 'so', text: 'Soy'},
//   { key: 'su', value: 'su', text: 'Sulfite'},
//   { key: 'tn', value: 'tn', text: 'Tree Nut'},
//   { key: 'wh', value: 'wh', text: 'Wheat'}
// ];

const Options = (props) => {

  return (
      <form>
        <label>
          Select Cuisine Type: 
          <select value={props.cuisine} onChange={props.onCuisineChange} >
            <option value=''>Choose an option</option>
            <option value='African'>African</option>
            <option value='American'>American</option>
            <option value='British'>British</option>
            <option value='Cajun'>Cajun</option>
            <option value='Caribbean'>Caribbean</option>
            <option value='Chinese'>Chinese</option>
            <option value='Easter European'>Easter European</option>
            <option value='European'>European</option>
            <option value='French'>French</option>
            <option value='German'>German</option>
            <option value='Greek'>Greek</option>
            <option value='Indian'>Indian</option>
            <option value='Irish'>Irish</option>
            <option value='Italian'>Italian</option>
            <option value='Japanese'>Japanese</option>
            <option value='Jewish'>Jewish</option>
            <option value='Korean'>Korean</option>
            <option value='Latin American'>Latin American</option>
            <option value='Mediterranean'>Mediterranean</option>
            <option value='Mexican'>Mexican</option>
            <option value='Middle Eastern'>Middle Eastern</option>
            <option value='Nordic'>Nordic</option>
            <option value='Southern'>Southern</option>
            <option value='Spanish'>Spanish</option>
            <option value='Thai'>Thai</option>
            <option value='Vietnamese'>Vietnamese</option>
          </select>
        </label>  
      </form>
    )
  }
  
  export default Options
