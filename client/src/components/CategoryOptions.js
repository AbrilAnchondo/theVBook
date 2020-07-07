import React from 'react';
import { Segment, Form } from 'semantic-ui-react';

const CategoryOptions = (props) => {
  console.log('category props: ',props);

const displayCategories = () => (
    props.categories.map(categorie => (
      <option value={categorie}>{categorie}</option>
   ))
  )

const ops = [

]
  
  return (
    <div>
      <Form>
        <label>Categories:
          <select value={props.categoryTerm} 
            onChange={props.onCategoryChange}
          >
            <option default>All</option>
            {displayCategories()}
          </select>
        </label>
      </Form>
    </div>
    

  )
}

export default CategoryOptions