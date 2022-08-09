import React from 'react'
import classes from './MealItem.module.css'
 
const MealItem = (props) => {
  const { name, description, price } = props;
  const priceRefactoring = `$ ${price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div className={classes.price}>{priceRefactoring}</div>
      </div>
      <div>

      </div>
    </li>
  )
}

export default MealItem