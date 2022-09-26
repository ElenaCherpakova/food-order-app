import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ name, description, price, id }) => {
  const priceRefactoring = `$ ${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div className={styles.price}>{priceRefactoring}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
