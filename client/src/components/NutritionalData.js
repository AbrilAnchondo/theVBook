import React, { useState, useEffect, Fragment } from 'react';
import { Segment } from 'semantic-ui-react';

const NutritionalData = ({ recipeId }) => {
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
      <div className='table-container'>
        <div>
          <h3 className='table-header'>Nutritional Information</h3>
            <table className='table-calories'>
              <thead>
                <tr>
                  <th>Calories</th>
                  <th>Protein</th>
                  <th>Carbohydates</th>
                  <th>Fat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{nutritionalData.calories}</td>
                  <td>{nutritionalData.protein}</td>
                  <td>{nutritionalData.carbs}</td>
                  <td>{nutritionalData.fat}</td>
                </tr>
              </tbody>
            </table>
        </div>

        <div>
          <h3 className='table-header'>Get enough of these</h3>
          <table className='table-good'>
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Amount</th>
                <th>% Daily Needs</th>
              </tr>
            </thead>
            <tbody>
              {goodStuff.map((nutrient, index) => <tr key={index}>
                <td>{nutrient.title}</td>
                <td>{nutrient.amount}</td>
                <td>{nutrient.percentOfDailyNeeds}</td>
                </tr>)}
            </tbody>
          </table>
        </div>

        <div>
          <h3 className='table-header'>Limit your intake of these</h3>
          <table className='table-bad'>
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Amount</th>
                <th>% Daily Needs</th>
              </tr>
            </thead>
            <tbody>
              {goodStuff.map((nutrient, index) => <tr key={index}>
                <td>{nutrient.title}</td>
                <td>{nutrient.amount}</td>
                <td>{nutrient.percentOfDailyNeeds}</td>
                </tr>)}
            </tbody>
          </table>
        </div>

      </div>
    </Fragment>
  )

}

export default NutritionalData

