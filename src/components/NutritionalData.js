import React, { useState, useEffect, Fragment } from 'react';

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
      <h3>Nutritional Information:</h3>
    </Fragment>
  )

}

export default NutritionalData