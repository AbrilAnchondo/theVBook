import React from 'react';

const CategoryOptions = (props) => {
  console.log('category props: ',props);

const displayCategories = () => (
    props.categories.map(categorie => (
      <option value={categorie}>{categorie}</option>
   ))
  )
  
  return (
    <div>
      <form>
        <label>Categories:
          <select value={props.categoryTerm} 
            onChange={props.onCategoryChange}
          >
            <option default>All</option>
            {displayCategories()}
          </select>
        </label>
      </form>
    </div>
  )
}

export default CategoryOptions