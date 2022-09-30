import React, { Fragment } from 'react';
import styles from './Header.module.css';
import imageMain from '../assets/mainPhoto.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>
          <span className={styles.logoFoody}>Foody</span>App
        </h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={imageMain} alt='delicious_food' />
      </div>
    </Fragment>
  );
};

export default Header;
