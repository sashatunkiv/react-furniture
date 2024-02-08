import React, { useState } from 'react'

function Category({ categoryId, onClickCategory}) {
    const categories = ['All', 'Cheer','Showdreub','shelf','sofa']

  return (
    <ul className="category">
        {
            categories.map((value, i) => (
            <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={categoryId === i ? 'active' : ''}
            >{value}</li>
            ))
        }
      </ul>
  )
}

export default Category;