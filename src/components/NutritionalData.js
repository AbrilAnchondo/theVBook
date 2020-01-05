import React, { useState, useEffect, Fragment } from 'react';
import { Table, Segment } from 'semantic-ui-react';

const NutritionalData = (props) => {
  const [nutritionalData, setNutritionalData] = useState([]);
  const id = props.recipeId;

  useEffect(() => {
    const fetchNutritionalInfo = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const nutriData = await response.json();
      //console.log("nutridata response", nutriData);
      setNutritionalData(nutriData);
    }
    fetchNutritionalInfo();
  },[])

  return (
    <Fragment>
      <h3>Nutritional Information</h3>
      <Segment.Group horizontal>
        <Segment color="green">Calories  {nutritionalData.calories}</Segment>
        <Segment color="green">Protein  {nutritionalData.protein}</Segment>
        <Segment color="green">Carbs  {nutritionalData.carbs}</Segment>
        <Segment color="green">Fat  {nutritionalData.fat}</Segment>
      </Segment.Group>
    </Fragment>
  )

}

export default NutritionalData






// <Table color="grey" inverted>
// <Table.Header>
//   <Table.Row>
//     <Table.HeaderCell>Nutrient</Table.HeaderCell>
//     <Table.HeaderCell>Amount</Table.HeaderCell>
//   </Table.Row>
// </Table.Header>

// <Table.Body>
//   <Table.Row>
//     <Table.Cell>Calories</Table.Cell>
//     <Table.Cell>{nutritionalData.calories}</Table.Cell>
//   </Table.Row>
//   <Table.Row>
//     <Table.Cell>Protein</Table.Cell>
//     <Table.Cell>{nutritionalData.protein}</Table.Cell>
//   </Table.Row>
//   <Table.Row>
//     <Table.Cell>Carbs</Table.Cell>
//     <Table.Cell>{nutritionalData.carbs}</Table.Cell>
//   </Table.Row>
//   <Table.Row>
//     <Table.Cell>Fat</Table.Cell>
//     <Table.Cell>{nutritionalData.fat}</Table.Cell>
//   </Table.Row>
// </Table.Body>
// </Table>