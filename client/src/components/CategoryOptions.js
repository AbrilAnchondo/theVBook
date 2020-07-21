import React from 'react';
import { Form } from 'semantic-ui-react';

const CategoryOptions = (props) => {

const displayCategories = () => (
    props.categories.map((categorie, index) => (
      <option key={index} value={categorie}>{categorie}</option>
   ))
  )
  
  return (
    <div>
      <Form>
        <label className='h2-header'>Select a Category:
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