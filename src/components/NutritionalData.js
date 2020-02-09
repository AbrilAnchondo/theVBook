import React, { useState, useEffect, Fragment } from 'react';
import { Progress, Header, Grid, Table } from 'semantic-ui-react';

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

  return (
    <Fragment>
      <Header as='h3'>Nutritional Information</Header>
      <Table color='blue' >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Calies</Table.HeaderCell>
            <Table.HeaderCell>Protein</Table.HeaderCell>
            <Table.HeaderCell>Carbs</Table.HeaderCell>
            <Table.HeaderCell>Fat</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{nutritionalData.calories}</Table.Cell>
            <Table.Cell>{nutritionalData.calories}</Table.Cell>
            <Table.Cell>{nutritionalData.carbs}</Table.Cell>
            <Table.Cell>{nutritionalData.fat}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Grid celled>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header>Make sure you get enough of:</Header>
        </Grid.Column>
        <Grid.Column width={13}>
        {goodStuff.map((nutrient, index) => <div key={index}>{nutrient.title} - {nutrient.amount} <Progress size='small' inverted color='pink' value={nutrient.percentOfDailyNeeds} total='100' progress='percent'/></div>)}
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <Header>Make sure you limit your intake of:</Header>
        </Grid.Column>
        <Grid.Column width={13}>
        {badStuff.map((nutrient, index) => <div key={index}>{nutrient.title} - {nutrient.amount} <Progress inverted color='violet' size='small' value={nutrient.percentOfDailyNeeds} total='100' progress='percent'/></div>)}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Fragment>
  )

}

export default NutritionalData




{/* <Segment>

<Grid columns={2} relaxed='very'>
  <Grid.Column>
    <Header>Limit your intake of:</Header>
    {goodStuff.map((nutrient, index) => <div key={index}>{nutrient.title} - {nutrient.amount} <Progress size='small' inverted color='pink' value={nutrient.percentOfDailyNeeds} total='100' progress='percent'/></div>)}  
  </Grid.Column>
  <Grid.Column>
    <Header>Make sure you get enough of:</Header>
    {badStuff.map((nutrient, index) => <div key={index}>{nutrient.title} - {nutrient.amount} <Progress inverted color='violet' size='small' value={nutrient.percentOfDailyNeeds} total='100' progress='percent'/></div>)}
  </Grid.Column>
</Grid>

<Divider horizontal>And</Divider>
</Segment> */}

