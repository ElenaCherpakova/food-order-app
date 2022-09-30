import React, { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const priceRefactoring = `$ ${price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div className={styles.price}>{priceRefactoring}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
