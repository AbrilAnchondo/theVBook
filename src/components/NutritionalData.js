import React, { useState, useEffect, Fragment } from 'react';
import { Segment, Progress, Header, Label, Grid } from 'semantic-ui-react';

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
      <Segment.Group horizontal>
        <Segment color="blue">Calories  {nutritionalData.calories}</Segment>
        <Segment color="blue">Protein  {nutritionalData.protein}</Segment>
        <Segment color="blue">Carbs  {nutritionalData.carbs}</Segment>
        <Segment color="blue">Fat  {nutritionalData.fat}</Segment>
      </Segment.Group>
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

{/* <Fragment>
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

{badStuff.map((nutrient, index) => <div key={index}>{nutrient.title} - {nutrient.amount} <Progress inverted color='violet' size='small' value={nutrient.percentOfDailyNeeds} total='100' progress='percent'/></div>)}

</div>
<div style={{height: "20%"}}>
<Header as='h3' dividing>Make sure you get enough of:</Header>
{goodStuff.map((nutrient, index) => <div key={index}>{nutrient.title} - {nutrient.amount} <Progress size='small' inverted color='pink' value={nutrient.percentOfDailyNeeds} total='100' progress='percent'/></div>)}
</div>
</Fragment> */}


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