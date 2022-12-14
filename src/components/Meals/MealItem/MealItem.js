import React, { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const priceFormated = `$${price.toFixed(2)}`;

  const AddToCartHandler = (amount) => {
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
        <div className={styles.price}>{priceFormated}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
