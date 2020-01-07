import React, { useState, useEffect, Fragment } from 'react';
import { Table, Segment, Progress, Header, Label } from 'semantic-ui-react';

const NutritionalData = (props) => {
  const [nutritionalData, setNutritionalData] = useState({});
  const [badStuff, setBadStuff] = useState([]);
  const [goodStuff, setGoodStuff] = useState([]);
  const id = props.recipeId;

  useEffect(() => {
    const fetchNutritionalInfo = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const nutriData = await response.json();
      setNutritionalData(nutriData);
      setBadStuff(nutriData.bad);
      setGoodStuff(nutriData.good);
    }
    fetchNutritionalInfo();
  },[])

  console.log("bad stuff state", badStuff);


  return (
    <Fragment>
      <Header as='h3'>Nutritional Information</Header>
      <Segment.Group horizontal>
        <Segment color="blue">Calories  {nutritionalData.calories}</Segment>
        <Segment color="blue">Protein  {nutritionalData.protein}</Segment>
        <Segment color="blue">Carbs  {nutritionalData.carbs}</Segment>
        <Segment color="blue">Fat  {nutritionalData.fat}</Segment>
      </Segment.Group>
      <div>
      <Label circular color='violet' size='mini'></Label> <Label circular color='pink' size='mini'></Label> Daily needs covered
      <Header as='h3' dividing>Limit your intake of:</Header>
      {badStuff.map((nutrient, index) => <p key={index}>{nutrient.title} - {nutrient.amount} <Progress inverted color='violet' size='small' value={nutrient.percentOfDailyNeeds} total='100' progress='percent'/></p>)}
      </div>
      <div>
      <Header as='h3' dividing>Make sure you get enough of:</Header>
      {goodStuff.map((nutrient, index) => <p key={index}>{nutrient.title} - {nutrient.amount} <Progress size='small' inverted color='pink' value={nutrient.percentOfDailyNeeds} total='100' progress='percent'/></p>)}
      </div>
    </Fragment>
  )

}

export default NutritionalData

//<Progress value='4' total='5' progress='percent' />




  




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