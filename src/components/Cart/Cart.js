import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'a1', name: 'sushi', amount: 2, price: 9.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>66.80</span>
      </div>
      <div className={styles.actions}>
        <button onClick={onClose} className={styles['button--alt']}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
