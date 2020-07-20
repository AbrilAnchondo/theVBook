import React, { useState, useEffect, Fragment } from 'react';
import { Segment, Header } from 'semantic-ui-react';

const NutritionalData = ({ recipeId }) => {
  console.log('recipeId: ',recipeId);
  const [nutritionalData, setNutritionalData] = useState({});
  const [badStuff, setBadStuff] = useState([]);
  const [goodStuff, setGoodStuff] = useState([]);

  useEffect(() => {
    const fetchNutritionalInfo = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const nutriData = await response.json();
      setNutritionalData(nutriData);
      setBadStuff(nutriData.bad);
      setGoodStuff(nutriData.good);
    }
    fetchNutritionalInfo();
  },[])

  return (
    <Fragment>
    <Segment tertiary >
      <h2 className='header'>Nutritional Information</h2>
    </Segment> 
    <div className='table-container'>
      <table className='table-calories'>
        <tr>
          <th>Calories</th>
          <th>Protein</th>
          <th>Carbs</th>
          <th>Fat</th>
        </tr>
        <tr>
          <td>{nutritionalData.calories}</td>
          <td>{nutritionalData.protein}</td>
          <td>{nutritionalData.carbs}</td>
          <td>{nutritionalData.fat}</td>
        </tr>
      </table>

      <br></br>
      <h2 className='header'>Make sure you get enough of these</h2>
      <table className='table-good'>
        <tr>
          <th>Nutrient</th>
          <th>Amount</th>
          <th>% Daily Needs</th>
        </tr>
        {goodStuff.map((nutrient, index) => <tr key={index}>
          <td>{nutrient.title}</td>
          <td>{nutrient.amount}</td>
          <td>{nutrient.percentOfDailyNeeds}</td>
          </tr>)}
      </table>

      <br></br>
      <h2 className='header'>Make sure you limit your intake of these</h2>
      <table className='table-bad'>
        <tr>
          <th>Nutrient</th>
          <th>Amount</th>
          <th>% Daily Needs</th>
        </tr>
        {goodStuff.map((nutrient, index) => <tr key={index}>
          <td>{nutrient.title}</td>
          <td>{nutrient.amount}</td>
          <td>{nutrient.percentOfDailyNeeds}</td>
          </tr>)}
      </table>
    </div>
    </Fragment>
  )

}

export default NutritionalData

