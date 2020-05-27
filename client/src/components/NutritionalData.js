import React, { useState, useEffect, Fragment } from 'react';
import { Header, Table } from 'semantic-ui-react';

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
      <div className='table' >
        <Header as='h3'>Nutritional Information</Header>
        <Table color='blue' inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Calories</Table.HeaderCell>
              <Table.HeaderCell>Protein</Table.HeaderCell>
              <Table.HeaderCell>Carbs</Table.HeaderCell>
              <Table.HeaderCell>Fat</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>{nutritionalData.calories}</Table.Cell>
              <Table.Cell>{nutritionalData.protein}</Table.Cell>
              <Table.Cell>{nutritionalData.carbs}</Table.Cell>
              <Table.Cell>{nutritionalData.fat}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <br></br>
      <div className='table' >
        <Header>Make sure you get enough of these</Header>
        <Table color='olive' key='olive' inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nutrient</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Percentage Of Daily Needs</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {goodStuff.map((nutrient, index) => <Table.Row key={index}>
            <Table.Cell>{nutrient.title}</Table.Cell>
            <Table.Cell>{nutrient.amount}</Table.Cell>
            <Table.Cell>{nutrient.percentOfDailyNeeds} %</Table.Cell>
            </Table.Row>)}
          </Table.Body>
        </Table>
      </div>

      <br></br>
      
      <div className='table' >
        <Header>Make sure you limit your intake of these</Header>
        <Table color='orange' key='orange' inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nutrient</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Percentage Of Daily Needs</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {badStuff.map((nutrient, index) => <Table.Row key={index}>
            <Table.Cell>{nutrient.title}</Table.Cell>
            <Table.Cell>{nutrient.amount}</Table.Cell>
            <Table.Cell>{nutrient.percentOfDailyNeeds} %</Table.Cell>
            </Table.Row>)}
          </Table.Body>
        </Table>
      </div>

  </Fragment>
  )

}

export default NutritionalData

